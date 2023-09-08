//libs
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';

//components
import MessageBox from './messageBox/MessageBox';
import Loader from '../../../loader/Loader';
import DateChat from './dateChat/dateChat';

//hooks
import {
  useWorkspace,
  useWorkspaceNavigator
} from '../../../workspaceProvider/WorkspaceProvider';
import { useInfiniteQuery } from '../../../../hooks/useInfiniteQuery';

//utils
import {
  getFetchFunctionFromTypeID,
  groupByDate
} from '../../../../utils/utils';
import { FETCH_LIMIT } from '../../../../utils/constants';
import { MessageDataType } from '../../../../types/dataTypes';

export default function ChatList() {
  const { selectedChatWindow } = useWorkspaceNavigator();
  const [lastMessageId, setLastMessageId] = useState<number | undefined>();
  const [lastScrollHeight, setLastScrollHeight] = useState<number>(0);

  const [fetchMessageCount, setFetchMessageCount] =
    useState<number>(FETCH_LIMIT);

  const fetchDataFunction = getFetchFunctionFromTypeID(
    selectedChatWindow?.type
  );

  const refreshFunction = (
    prevData: MessageDataType[],
    newData: MessageDataType[]
  ) => !(prevData?.at(-1)?.id === newData?.at(-1)?.id);

  const { loading, data, error, updateData, totalCount } = useInfiniteQuery({
    queryFunction: useCallback(
      async () => fetchDataFunction(selectedChatWindow?.id, fetchMessageCount),
      [selectedChatWindow, fetchMessageCount, fetchDataFunction]
    ),
    page: fetchMessageCount,
    refreshInterval: 4000,
    refreshFunction
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    const handleScroll = () => {
      if (element?.scrollTop === 0) {
        if (totalCount && totalCount > fetchMessageCount)
          setFetchMessageCount((count) => count + FETCH_LIMIT);
      }
    };
    element?.addEventListener('scroll', handleScroll);
    return () => {
      element?.removeEventListener('scroll', handleScroll);
    };
  });

  useLayoutEffect(() => {
    if (containerRef.current?.scrollHeight) {
      containerRef.current.scrollTop =
        containerRef.current.scrollHeight - lastScrollHeight - 10;
      setLastScrollHeight(containerRef.current.scrollHeight);
    }
  }, [data?.length]);

  useLayoutEffect(() => {
    if (containerRef.current?.scrollHeight) {
      containerRef.current.scrollTop = containerRef.current?.scrollHeight;
    }
  }, [lastMessageId]);

  const groupedMessages = useMemo(
    () => (data ? groupByDate(data) : null),
    [data]
  );
  if (data && groupedMessages) {
    const lastId = Object.values(groupedMessages).at(-1)?.at(-1)?.id;
    if (lastMessageId !== lastId) {
      setLastMessageId(lastId);
    }
  }

  const updateMessageCallback = useCallback(
    (newMessageResponse: MessageDataType) => {
      updateData([...data, { ...newMessageResponse }]);
    },
    [data]
  );

  return (
    <>
      <div className="chat_list_container" ref={containerRef}>
        <div className="chat_list_header"></div>
        {loading ? (
          <div className="chat_list_loader">
            <Loader />
          </div>
        ) : (
          <></>
        )}
        {data && groupedMessages ? (
          Object.entries(groupedMessages).map(([key, value]) => {
            return <DateChat date={key} key={key} chatList={value} />;
          })
        ) : (
          <></>
        )}
      </div>

      <MessageBox
        key={`${selectedChatWindow?.type}_${selectedChatWindow?.id}`}
        updateMessageCallback={updateMessageCallback}
      />
    </>
  );
}

//libs
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

//components
import MessageBox from '../MessageBox/MessageBox';
import Loader from '../Loader/Loader';

//hooks
import {
  useWorkspace,
  useWorkspaceNavigator
} from '../WorkspaceProvider/WorkspaceProvider';
import { useInfiniteQuery } from '../../Hooks/useInfiniteQuery';

//utils
import { getFetchFunctionFromTypeID, groupByDate } from '../../utils/utils';
import { FETCH_LIMIT } from '../../utils/constants';
import DateChat from '../DateChat/dateChat';

export default function ChatList() {
  const { selectedChatWindow } = useWorkspaceNavigator();
  const [lastMessageId, setLastMessageId] = useState<number | undefined>();

  const [fetchMessageCount, setFetchMessageCount] =
    useState<number>(FETCH_LIMIT);
  const updateFunction = (prevData: any, newData: any) => [
    ...prevData,
    { ...newData }
  ];
  const queryFunction = getFetchFunctionFromTypeID(selectedChatWindow?.type);

  const { loading, data, error, updateData, pageLimit } = useInfiniteQuery({
    queryFunction: async () =>
      queryFunction(selectedChatWindow?.id, fetchMessageCount),
    page: fetchMessageCount,
    updateFunction: updateFunction,
    refetchProps: [selectedChatWindow]
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    const handleScroll = () => {
      if (element?.scrollTop === 0) {
        if (pageLimit && pageLimit > fetchMessageCount)
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
      containerRef.current.scrollTop = containerRef.current?.scrollHeight;
    }
  }, [lastMessageId]);

  let groupedMessages;
  if (data) {
    groupedMessages = groupByDate(data);
    const lastId = Object.values(groupedMessages).at(-1)?.at(-1)?.id;
    if (lastMessageId !== lastId) {
      setLastMessageId(lastId);
    }
  }

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
        updateMessageCallback={updateData}
      />
    </>
  );
}

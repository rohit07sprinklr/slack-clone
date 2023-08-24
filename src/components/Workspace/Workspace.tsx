import ChatList from '../ChatList/ChatList';
import MessageBox from '../MessageBox/MessageBox';
import './workspace.css';
import Bookmarks from '../Bookmarks/Bookmarks';
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  getMessagesFromChannelID,
  getMessagesFromChatID,
  getMessagesFromGroupID
} from '../../httpServices/httpService';
import { MessageDataType } from '../../types/dataTypes';
import { CHAT_TYPE } from '../../utils/constants';
import Loader from '../Loader/Loader';
import { useWorkspace } from '../WorkspaceProvider/WorkspaceProvider';

export default function Workspace() {
  const { selectedChatWindow } = useWorkspace();
  const [messageList, setMessageList] = useState<MessageDataType[]>([]);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const fetchFunction =
        selectedChatWindow?.type === CHAT_TYPE.DIRECT
          ? getMessagesFromChatID
          : selectedChatWindow?.type === CHAT_TYPE.CHANNEL
          ? getMessagesFromChannelID
          : getMessagesFromGroupID;
      const currMessageList = selectedChatWindow
        ? await fetchFunction(selectedChatWindow?.id)
        : { messages: [] };
      setMessageList(currMessageList['messages']);
    };
    if (selectedChatWindow?.type && selectedChatWindow?.id) {
      setShowLoader(true);
      fetchMessages().then(() => {
        setShowLoader(false);
      });
    }
    return () => {
      setMessageList([]);
    };
  }, [selectedChatWindow]);

  const updateMessageCallback = (newMessageObj: MessageDataType) => {
    setMessageList([...messageList, { ...newMessageObj }]);
  };

  useLayoutEffect(() => {
    if (containerRef.current?.scrollHeight) {
      containerRef.current.scrollTop = containerRef.current?.scrollHeight;
    }
  }, [messageList.length]);

  if (selectedChatWindow) {
    return (
      <div className="workspace">
        <WorkspaceHeader />
        <Bookmarks />
        <div className="chat_list_container" ref={containerRef}>
          <div className="chat_list_header"></div>
          {showLoader ? (
            <div className="chat_list_loader">
              <Loader />
            </div>
          ) : (
            <ChatList messageList={messageList} />
          )}
        </div>

        <MessageBox
          key={`${selectedChatWindow?.type}_${selectedChatWindow?.id}`}
          updateMessageCallback={updateMessageCallback}
        />
      </div>
    );
  } else {
    return (
      <div className="workspace welcome">
        <div className="welcome_header">
          <img src="assets/waving_hand.png"></img>
          <span>Welcome!</span>
        </div>
        <div className="welcome_subheader">
          <span>Slack is a messaging app for teams</span>
        </div>
      </div>
    );
  }
}

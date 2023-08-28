//components
import SingleChat from '../SingleChat/singleChat';
import './dateChat.css';

//utils
import { formatDate } from '../../utils/utils';
import { MessageDataType } from '../../types/dataTypes';

//types
type DateChatProps = {
  date: string;
  chatList: MessageDataType[];
};

export default function DateChat(props: DateChatProps) {
  return (
    <div className="date-chat-container">
      <div className="date-chat-divider-button">
        <button className="button" id="date-divider-button">
          {formatDate(props.date)}
          <img
            src="assets/icons/arrow-down-light.svg"
            width="13"
            height="13"
            alt="date menu"
          ></img>
        </button>
      </div>
      <div className="date-chat-divider"></div>

      {props.chatList.map((chat: MessageDataType) => (
        <SingleChat
          key={chat.id}
          userID={chat.sendorId}
          userName={chat.sendorName}
          userAvatar={chat.sendorAvatarSrc}
          text={chat.text}
          timestamp={chat.timestamp}
        />
      ))}
    </div>
  );
}

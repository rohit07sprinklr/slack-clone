//components
import SingleChat from './singleChat/singleChat';

//utils
import { formatDate } from '../../../../../utils/utils';
import { MessageDataType } from '../../../../../types/dataTypes';

//types
type DateChatProps = {
  date: string;
  chatList: MessageDataType[];
};

//css
import './dateChat.css';

export default function DateChat({ date, chatList }: DateChatProps) {
  return (
    <div className="date-chat-container">
      <div className="date-chat-divider-button">
        <button className="button" id="date-divider-button">
          {formatDate(date)}
          <img
            src="assets/icons/arrow-down-light.svg"
            width="13"
            height="13"
            alt="date menu"
          ></img>
        </button>
      </div>
      <div className="date-chat-divider"></div>

      {chatList.map((chat: MessageDataType) => (
        <SingleChat
          key={chat.id}
          userId={chat.sendorId}
          userName={chat.sendorName}
          userAvatar={chat.sendorAvatarSrc}
          text={chat.text}
          timestamp={chat.timestamp}
        />
      ))}
    </div>
  );
}

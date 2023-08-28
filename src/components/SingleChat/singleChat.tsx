//components
import Avatar from '../Avatar/Avatar';

//utils
import { getTimeFromTimestamp } from '../../utils/utils';

//styles
import './singleChat.css';

//types
type SingleChatProps = {
  userID: number;
  userName: string;
  userAvatar: string;
  text: string;
  timestamp: number;
};

export default function SingleChat(props: SingleChatProps) {
  return (
    <div className="chat-message-container">
      <Avatar size={'large'} avatarSrc={props.userAvatar} />
      <div className="chat-desc">
        <div className="chat-desc-header">
          <div id="chat-desc-header-name">{props.userName}</div>
          <div id="chat-desc-header-timestamp">
            {getTimeFromTimestamp(props.timestamp)}
          </div>
        </div>
        <div className="chat-desc-text">{props.text}</div>
      </div>
    </div>
  );
}

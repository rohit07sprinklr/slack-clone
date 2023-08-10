import { getTimeFromTimestamp } from '../../utils/utils';
import Avatar from '../Avatar/Avatar';
import './singleChat.css';
export default function SingleChat(props: any) {
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

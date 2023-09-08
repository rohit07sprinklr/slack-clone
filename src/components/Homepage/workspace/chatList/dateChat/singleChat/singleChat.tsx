//components
import Avatar from '../../../../../avatar/Avatar';

//utils
import { getTimeFromTimestamp } from '../../../../../../utils/utils';

//css
import './singleChat.css';

//types
type SingleChatProps = {
  userId: number;
  userName: string;
  userAvatar: string;
  text: string;
  timestamp: number;
};

export default function SingleChat({
  userId,
  userName,
  userAvatar,
  text,
  timestamp
}: SingleChatProps) {
  return (
    <div className="chat-message-container">
      <Avatar size={'--large'} avatarSrc={userAvatar} />
      <div className="chat-desc">
        <div className="chat-desc-header">
          <div id="chat-desc-header-name">{userName}</div>
          <div id="chat-desc-header-timestamp">
            {getTimeFromTimestamp(timestamp)}
          </div>
        </div>
        <div className="chat-desc-text">{text}</div>
      </div>
    </div>
  );
}

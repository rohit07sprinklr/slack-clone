import { useContext } from 'react';
import Avatar from '../Avatar/Avatar';
import { WorkspaceContext } from '../Mainpage/Mainpage';
import { CHAT_TYPE } from '../../utils/constants';

export default function GroupChatMenu(props: {
  groupID: number;
  groupName: string;
  groupAvatar: string;
}) {
  const { selectedChatWindow, setSelectedChatWindow } =
    useContext(WorkspaceContext);
  return (
    <button
      className={'button navbar_quick_access_menu'}
      id={
        selectedChatWindow.type === CHAT_TYPE.GROUP &&
        selectedChatWindow.id === props.groupID
          ? 'active'
          : ''
      }
      onClick={() =>
        setSelectedChatWindow({ type: CHAT_TYPE.GROUP, id: props.groupID })
      }
    >
      <Avatar size="small" avatarSrc={props.groupAvatar} />
      <div className="navbar_quick_access_menu_title">{props.groupName}</div>
    </button>
  );
}

import './navbarMenu.css';
import { useWorkspace } from '../WorkspaceProvider/WorkspaceProvider';
import { ReactElement, useState } from 'react';
import Avatar from '../Avatar/Avatar';

export function NavbarMenuList(props: any) {
  const [MenuExpanded, setMenuExpanded] = useState<boolean>(true);
  const handleArrowClick = () => {
    setMenuExpanded((currVal) => !currVal);
  };
  return (
    <div className="navbar_chatList_item">
      <div className="navbar_chatList_options">
        <button
          className="button navbar_chatList_button"
          onClick={handleArrowClick}
        >
          <span className={'arrow '.concat(MenuExpanded ? 'expanded' : '')} />
        </button>
        <button className="button">{props.title}</button>
      </div>
      {MenuExpanded && props.children}
    </div>
  );
}

export function NavbarMenu(props: {
  title: string;
  chatID: number;
  chatType: number;
  avatarSrc?: string;
  IconElement?: ReactElement;
}) {
  const { selectedChatWindow, setSelectedChatWindow } = useWorkspace();
  return (
    <button
      className="button navbar_quick_access_menu"
      id={
        selectedChatWindow?.type === props.chatType &&
        selectedChatWindow?.id === props.chatID
          ? 'active'
          : ''
      }
      onClick={() =>
        setSelectedChatWindow({ type: props.chatType, id: props.chatID })
      }
    >
      {props.avatarSrc ? (
        <Avatar size="small" avatarSrc={props.avatarSrc} />
      ) : (
        props.IconElement
      )}

      <div className="navbar_quick_access_menu_title">{props.title}</div>
    </button>
  );
}

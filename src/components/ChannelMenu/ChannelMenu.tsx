import { useContext } from 'react';
import './channelMenu.css';
import { WorkspaceContext } from '../Mainpage/Mainpage';
import { CHAT_TYPE } from '../../utils/constants';

export default function ChannelMenu(props: {
  title: string;
  chatID: number;
  svgComponent: any;
}) {
  const { selectedChatWindow, setSelectedChatWindow } =
    useContext(WorkspaceContext);
  return (
    <button
      className="button navbar_quick_access_menu"
      id={
        selectedChatWindow?.type === CHAT_TYPE.CHANNEL &&
        selectedChatWindow?.id === props.chatID
          ? 'active'
          : ''
      }
      onClick={() =>
        setSelectedChatWindow({ type: CHAT_TYPE.CHANNEL, id: props.chatID })
      }
    >
      {props.svgComponent}
      <div className="navbar_quick_access_menu_title">{props.title}</div>
    </button>
  );
}

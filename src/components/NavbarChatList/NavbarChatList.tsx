import { useContext, useState } from 'react';
import DirectMessageUser from '../DirectMessageUser/DirectMessageUser';
import ChannelMenu from '../ChannelMenu/ChannelMenu';
import './NavbarChatList.css';
import { WorkspaceContext } from '../Mainpage/Mainpage';
import GroupChatMenu from '../GroupChatMenu/GroupChatMenu';

function ChannelIconElement() {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      data-1qi="true"
      aria-hidden="true"
      data-qa="sidebar-channel-icon-prefix"
      data-sidebar-channel-icon="channel"
      viewBox="0 0 20 20"
      width="16"
      height="16"
    >
      <path
        fill="#FFFFFF"
        fill-rule="evenodd"
        d="M9.74 3.878a.75.75 0 1 0-1.48-.255L7.68 7H3.75a.75.75 0 0 0 0 1.5h3.67L6.472 14H2.75a.75.75 0 0 0 0 1.5h3.463l-.452 2.623a.75.75 0 0 0 1.478.255l.496-2.878h3.228l-.452 2.623a.75.75 0 0 0 1.478.255l.496-2.878h3.765a.75.75 0 0 0 0-1.5h-3.506l.948-5.5h3.558a.75.75 0 0 0 0-1.5h-3.3l.54-3.122a.75.75 0 0 0-1.48-.255L12.43 7H9.2l.538-3.122ZM11.221 14l.948-5.5H8.942L7.994 14h3.228Z"
        clip-rule="evenodd"
        fill-opacity="0.7"
      ></path>
    </svg>
  );
}

function NavbarChatListMenu(props: any) {
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

export default function NavbarChatList(props: any) {
  const { directChatProfiles, groupChats, channels } =
    useContext(WorkspaceContext);
  return (
    <div className="navbar_chatList">
      <NavbarChatListMenu title={'Channels'} key={1}>
        {channels.map((channel: any) => (
          <ChannelMenu
            key={channel.id}
            title={channel.name}
            chatID={channel.id}
            svgComponent={ChannelIconElement()}
          />
        ))}
      </NavbarChatListMenu>

      <NavbarChatListMenu title={'Direct Messages'} key={2}>
        {directChatProfiles.map((profile: any) => (
          <DirectMessageUser
            key={profile.id}
            profileID={profile.id}
            profileName={profile.name}
            profileAvatar={profile.imageSrc}
          />
        ))}
      </NavbarChatListMenu>

      <NavbarChatListMenu title={'Group Messages'} key={3}>
        {groupChats.map((chat: any) => (
          <GroupChatMenu
            key={chat.id}
            groupName={chat.name}
            groupID={chat.id}
            groupAvatar={chat.imageSrc}
          />
        ))}
      </NavbarChatListMenu>
    </div>
  );
}

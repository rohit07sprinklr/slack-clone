import './NavbarChatList.css';
import { useWorkspace } from '../WorkspaceProvider/WorkspaceProvider';
import { NavbarMenuList, NavbarMenu } from '../NavbarMenu/NavbarMenu';
import { CHAT_TYPE } from '../../utils/constants';
import { ChannelIconElement } from '../IconElement/ChannelIconElement';

export default function NavbarChatList(props: any) {
  const { directChatProfiles, groupChats, channels } = useWorkspace();
  return (
    <div className="navbar_chatList">
      <NavbarMenuList title={'Channels'} key={1}>
        {channels.map((channel: any) => (
          <NavbarMenu
            key={channel.id}
            title={channel.name}
            chatID={channel.id}
            chatType={CHAT_TYPE.CHANNEL}
            IconElement={<ChannelIconElement />}
          />
        ))}
      </NavbarMenuList>

      <NavbarMenuList title={'Direct Messages'} key={2}>
        {directChatProfiles.map((profile: any) => (
          <NavbarMenu
            key={profile.id}
            title={profile.name}
            chatID={profile.id}
            chatType={CHAT_TYPE.DIRECT}
            avatarSrc={profile.imageSrc}
          />
        ))}
      </NavbarMenuList>

      <NavbarMenuList title={'Group Messages'} key={3}>
        {groupChats.map((chat: any) => (
          <NavbarMenu
            key={chat.id}
            title={chat.name}
            chatID={chat.id}
            chatType={CHAT_TYPE.GROUP}
            avatarSrc={chat.imageSrc}
          />
        ))}
      </NavbarMenuList>
    </div>
  );
}

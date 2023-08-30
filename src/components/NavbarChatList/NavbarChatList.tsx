//components
import { NavbarMenuList, NavbarMenu } from '../NavbarMenu/NavbarMenu';
import { ChannelIconElement } from '../IconElement/ChannelIconElement';
import { useWorkspace } from '../WorkspaceProvider/WorkspaceProvider';

//styles
import './NavbarChatList.css';

//utils
import { CHAT_TYPE } from '../../utils/constants';

export default function NavbarChatList() {
  const { directChatProfiles, groupChats, channels } = useWorkspace();
  return (
    <div className="navbar_chatList">
      <NavbarMenuList
        title={'Channels'}
        key={CHAT_TYPE.CHANNEL}
        typeID={CHAT_TYPE.CHANNEL}
      >
        {channels?.map((channel: any) => (
          <NavbarMenu
            key={channel.id}
            title={channel.name}
            chatID={channel.id}
            chatType={CHAT_TYPE.CHANNEL}
            IconElement={<ChannelIconElement />}
          />
        ))}
      </NavbarMenuList>

      <NavbarMenuList
        title={'Direct Messages'}
        key={CHAT_TYPE.DIRECT}
        typeID={CHAT_TYPE.DIRECT}
      >
        {directChatProfiles?.map((profile: any) => (
          <NavbarMenu
            key={profile.id}
            title={profile.name}
            chatID={profile.id}
            chatType={CHAT_TYPE.DIRECT}
            avatarSrc={profile.imageSrc}
          />
        ))}
      </NavbarMenuList>

      <NavbarMenuList
        title={'Group Messages'}
        key={CHAT_TYPE.GROUP}
        typeID={CHAT_TYPE.GROUP}
      >
        {groupChats?.map((chat: any) => (
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

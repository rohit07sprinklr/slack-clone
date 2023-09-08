//libs
import { ReactElement, useCallback, useState } from 'react';

//components
import Avatar from '../../../../avatar/Avatar';

//hooks
import {
  useWorkspace,
  useWorkspaceNavigator
} from '../../../../workspaceProvider/WorkspaceProvider';

//styles
import './navbarMenu.css';
import { AddInput } from './addInput/AddInput';
import {
  postChannelChat,
  postGroupChat
} from '../../../../../httpServices/httpService';
import { CHAT_TYPE } from '../../../../../utils/constants';
import { useUser } from '../../../../userProvider/UserProvider';

//types
type NavbarMenuProps = {
  title: string;
  chatID: number;
  chatType: number;
  avatarSrc?: string;
  IconElement?: ReactElement;
};

//types
type NavbarMenuListProps = {
  title: string;
  typeID: number;
  children: any;
};

export function NavbarMenuList({
  title,
  typeID,
  children
}: NavbarMenuListProps) {
  const [MenuExpanded, setMenuExpanded] = useState<boolean>(true);
  const [addInputExpanded, setAddInputExpanded] = useState<boolean>(false);
  const { updateChannelChats, updateGroupChats, channels, groupChats } =
    useWorkspace();
  const handleArrowClick = () => {
    setMenuExpanded((currVal) => !currVal);
  };
  const handleAddClick = () => {
    setAddInputExpanded(true);
  };
  const closeInputCallback = useCallback(() => {
    setAddInputExpanded(false);
  }, []);
  const postFunction =
    typeID === CHAT_TYPE.CHANNEL ? postChannelChat : postGroupChat;
  const updateFunction =
    typeID === CHAT_TYPE.CHANNEL ? updateChannelChats : updateGroupChats;

  const data = typeID === CHAT_TYPE.CHANNEL ? channels : groupChats;

  const handleInputSubmit = useCallback(
    async (value: string) => {
      const newData = await postFunction(value);
      updateFunction([...data, { ...newData }]);
    },
    [data, typeID]
  );

  return (
    <>
      <div className="navbar_chatList_item">
        <div className="navbar_chatList_options">
          <button
            className="button navbar_chatList_button"
            onClick={handleArrowClick}
          >
            <span className={'arrow '.concat(MenuExpanded ? 'expanded' : '')} />
          </button>
          <button className="button">{title}</button>
        </div>
        {MenuExpanded && children}
        {typeID !== CHAT_TYPE.DIRECT ? (
          <div className="add-menu-container">
            {addInputExpanded ? (
              <AddInput
                onCancel={closeInputCallback}
                onSubmit={handleInputSubmit}
              />
            ) : (
              <button
                className="button navbar_quick_access_menu"
                id="add_button"
                onClick={handleAddClick}
              >
                + {title}
              </button>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export function NavbarMenu({
  title,
  chatID,
  chatType,
  avatarSrc,
  IconElement
}: NavbarMenuProps) {
  const { selectedChatWindow, setSelectedChatWindow } = useWorkspaceNavigator();
  const user = useUser();
  return (
    <button
      className="button navbar_quick_access_menu"
      id={
        selectedChatWindow?.type === chatType &&
        selectedChatWindow?.id === chatID
          ? '--active'
          : ''
      }
      onClick={() => setSelectedChatWindow({ type: chatType, id: chatID })}
    >
      {avatarSrc ? (
        <Avatar size="--small" avatarSrc={avatarSrc} />
      ) : (
        IconElement
      )}

      <div className="navbar_quick_access_menu_title">
        {title}
        {chatType === CHAT_TYPE.DIRECT && chatID === user?.id ? (
          <span id="current_user">you</span>
        ) : (
          <></>
        )}
      </div>
    </button>
  );
}

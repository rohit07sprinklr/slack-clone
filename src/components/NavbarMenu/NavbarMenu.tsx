//libs
import { ReactElement, useCallback, useState } from 'react';

//components
import Avatar from '../Avatar/Avatar';

//hooks
import {
  useWorkspace,
  useWorkspaceNavigator
} from '../WorkspaceProvider/WorkspaceProvider';

//styles
import './navbarMenu.css';
import { AddInput } from '../AddInput/AddInput';
import { postChannelChat, postGroupChat } from '../../httpServices/httpService';
import { CHAT_TYPE } from '../../utils/constants';
import { useUser } from '../UserProvider/UserProvider';

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

export function NavbarMenuList(props: NavbarMenuListProps) {
  const [MenuExpanded, setMenuExpanded] = useState<boolean>(true);
  const [addInputExpanded, setAddInputExpanded] = useState<boolean>(false);
  const { updateChannelChats, updateGroupChats } = useWorkspace();
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
    props.typeID === CHAT_TYPE.CHANNEL ? postChannelChat : postGroupChat;
  const updateFunction =
    props.typeID === CHAT_TYPE.CHANNEL ? updateChannelChats : updateGroupChats;

  const handleInputSubmit = useCallback(
    async (value: string) => {
      const res = await postFunction(value);
      updateFunction(res, 'POST');
    },
    [props.typeID]
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
          <button className="button">{props.title}</button>
        </div>
        {MenuExpanded && props.children}
        {props.typeID !== CHAT_TYPE.DIRECT ? (
          <div className="add-menu-container">
            {addInputExpanded ? (
              <AddInput
                closeInput={closeInputCallback}
                handleInputSubmit={handleInputSubmit}
              />
            ) : (
              <button
                className="button navbar_quick_access_menu"
                id="add_button"
                onClick={handleAddClick}
              >
                + {props.title}
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

export function NavbarMenu(props: NavbarMenuProps) {
  const { selectedChatWindow, setSelectedChatWindow } = useWorkspaceNavigator();
  const user = useUser();
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

      <div className="navbar_quick_access_menu_title">
        {props.title}
        {props.chatType === CHAT_TYPE.DIRECT && props.chatID === user?.id ? (
          <span id="current_user">you</span>
        ) : (
          <></>
        )}
      </div>
    </button>
  );
}

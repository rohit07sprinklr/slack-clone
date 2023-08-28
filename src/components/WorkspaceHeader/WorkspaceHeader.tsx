//libs
import { useEffect, useState } from 'react';

//components
import Avatar from '../Avatar/Avatar';

//hooks
import { useWorkspace } from '../WorkspaceProvider/WorkspaceProvider';

//utils
import { CHAT_TYPE } from '../../utils/constants';

//types
import { ChatUser } from '../../types/dataTypes';
import { ChannelIconElement } from '../IconElement/ChannelIconElement';

export default function WorkspaceHeader() {
  const { selectedChatWindow, directChatProfiles, groupChats, channels } =
    useWorkspace();
  const [currentUser, setCurrentUser] = useState<ChatUser>({} as ChatUser);

  const getChatInfoFromID = () => {
    const searchList =
      selectedChatWindow?.type === CHAT_TYPE.DIRECT
        ? directChatProfiles
        : selectedChatWindow?.type === CHAT_TYPE.CHANNEL
        ? channels
        : groupChats;
    const chatInfo = searchList.filter(
      (itm: ChatUser) => itm.id === selectedChatWindow?.id
    );
    return chatInfo.length ? chatInfo[0] : { name: '' };
  };

  useEffect(() => {
    const user = getChatInfoFromID();
    setCurrentUser(user);
  }, [selectedChatWindow, directChatProfiles]);

  return (
    <div className="workspace_item">
      <button className="button workspace_item_button">
        {selectedChatWindow?.type === CHAT_TYPE.CHANNEL ? (
          <ChannelIconElement width="18px" height="18px" theme="dark" />
        ) : (
          <Avatar avatarSrc={currentUser.imageSrc} size="medium" />
        )}
        {currentUser.name}
        <img src="assets/icons/arrow-down-dark.svg" width="18" height="18" />
      </button>
    </div>
  );
}

//libs
import { memo, useCallback, useEffect, useState } from 'react';

//components
import Avatar from '../Avatar/Avatar';

//hooks
import {
  useWorkspace,
  useWorkspaceNavigator
} from '../WorkspaceProvider/WorkspaceProvider';

//utils
import { CHAT_TYPE } from '../../utils/constants';

//types
import { ChatUser } from '../../types/dataTypes';
import { ChannelIconElement } from '../IconElement/ChannelIconElement';
import { DialogModal } from '../AddMemberDialog/DialogModal';
import { GroupMembers } from '../GroupMembers/GroupMembers';

const WorkspaceHeader = memo(() => {
  const { selectedChatWindow } = useWorkspaceNavigator();
  const { directChatProfiles, groupChats, channels } = useWorkspace();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const currentUser = useMemo(() =>  if (selectedChatWindow?.type === CHAT_TYPE.DIRECT) {
    const chatInfo = directChatProfiles?.filter(
      (itm: any) => itm.id === selectedChatWindow?.id
    );
    return chatInfo?.[0];
  } else {
    const searchList =
      selectedChatWindow?.type === CHAT_TYPE.CHANNEL ? channels : groupChats;
    const chatInfo = searchList?.filter(
      (itm: any) => itm.id === selectedChatWindow?.id
    );
    return chatInfo?.[0];
  });

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleCloseDialog = useCallback(() => {
    setDialogOpen(false);s
  }, []);

  return (
    <>
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
        {selectedChatWindow?.type !== CHAT_TYPE.DIRECT ? (
          <button
            className="button workspace_item_button workspace_item_button_add"
            onClick={handleOpenDialog}
          >
            <img
              src="assets/icons/add.svg"
              width="13"
              height="13"
              alt="add bookmark"
            ></img>
            Add Members
          </button>
        ) : (
          <></>
        )}
      </div>
      <DialogModal
        dialogOpen={dialogOpen}
        title={
          <div className="dialog-title">
            {selectedChatWindow?.type === CHAT_TYPE.CHANNEL ? (
              <ChannelIconElement width="25px" height="25px" theme="dark" />
            ) : (
              <Avatar avatarSrc={currentUser.imageSrc} size="large" />
            )}
            {currentUser.name}
          </div>
        }
        closeDialog={handleCloseDialog}
      >
        <GroupMembers />
      </DialogModal>
    </>
  );
});

export { WorkspaceHeader };

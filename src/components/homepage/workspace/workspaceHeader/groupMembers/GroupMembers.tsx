//libs
import { useMemo, useState } from 'react';

//components
import Avatar from '../../../../avatar/Avatar';
import {
  useWorkspace,
  useWorkspaceNavigator
} from '../../../../workspaceProvider/WorkspaceProvider';

//utils
import { DirectChatProfileType } from '../../../../../types/dataTypes';
import { CHAT_TYPE } from '../../../../../utils/constants';
import {
  patchChannel,
  patchGroup
} from '../../../../../httpServices/httpService';

//css
import './groupMembers.css';

export function GroupMembers() {
  const {
    directChatProfiles,
    groupChats,
    channels,
    updateChannelChats,
    updateGroupChats
  } = useWorkspace();
  const { selectedChatWindow } = useWorkspaceNavigator();
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const memberList = useMemo(() => {
    const searchList =
      selectedChatWindow?.type === CHAT_TYPE.CHANNEL ? channels : groupChats;
    const groupInfo = searchList?.filter(
      (itm: any) => itm.id === selectedChatWindow?.id
    );
    return groupInfo?.[0].members;
  }, [selectedChatWindow, channels, groupChats]);

  const handleSelectClick = (id: number) => {
    setSelectedMembers((val: number[]) => {
      return val.includes(id)
        ? [...val].filter((memberId: number) => memberId != id)
        : [...val, id];
    });
  };
  const handleSubmitClick = async () => {
    if (selectedMembers?.length === 0) return;
    const patchFunction =
      selectedChatWindow?.type === CHAT_TYPE.CHANNEL
        ? patchChannel
        : patchGroup;
    const updateFunction =
      selectedChatWindow?.type === CHAT_TYPE.CHANNEL
        ? updateChannelChats
        : updateGroupChats;
    const data =
      selectedChatWindow?.type === CHAT_TYPE.CHANNEL ? channels : groupChats;

    if (selectedChatWindow?.id) {
      setLoading(true);
      const newData = await patchFunction(
        selectedChatWindow.id,
        selectedMembers
      );
      updateFunction(
        [...data].map((dataObj) =>
          dataObj.id === newData.id ? newData : dataObj
        )
      );
      setSelectedMembers([]);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="member-list-container">
        <div className="member-list-desc">
          Active Members ({memberList?.length})
        </div>
        {directChatProfiles.map((profile) => {
          if (memberList.includes(profile.id))
            return <Members profile={profile} key={profile.id} />;
        })}
        <div className="member-list-desc">Add Members</div>
        {directChatProfiles.map((profile) => {
          if (!memberList.includes(profile.id))
            return (
              <Members profile={profile} key={profile.id}>
                <button
                  className="button"
                  onClick={() => handleSelectClick(profile.id)}
                >
                  <img
                    src={
                      selectedMembers?.includes(profile.id)
                        ? 'assets/icons/circle-tick.png'
                        : 'assets/icons/circle.png'
                    }
                    className="member-selection-button"
                  />
                </button>
              </Members>
            );
        })}
      </div>
      <button
        className="button"
        id="add-member-button"
        onClick={handleSubmitClick}
        disabled={selectedMembers.length && !loading ? false : true}
      >
        Add Members
      </button>
    </>
  );
}

const Members = ({
  profile,
  children
}: {
  profile: DirectChatProfileType;
  children?: any;
}) => {
  return (
    <div className="member-container">
      <div className="member-desc">
        <Avatar avatarSrc={profile.imageSrc} size="--large" />
        {profile.name}
      </div>
      {children}
    </div>
  );
};

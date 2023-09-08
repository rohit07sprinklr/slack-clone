import {
  ChatWindowDataType,
  DirectChatProfileType,
  GroupType,
  UserDataType
} from './dataTypes';

export type workspaceContextType = {
  directChatProfiles: DirectChatProfileType[];
  groupChats: GroupType[];
  channels: GroupType[];
  updateGroupChats: (arg: GroupType[]) => void;
  updateChannelChats: (arg: GroupType[]) => void;
};

export type workspaceNavigatorContextType = {
  selectedChatWindow: ChatWindowDataType;
  setSelectedChatWindow: (a: ChatWindowDataType) => void;
};

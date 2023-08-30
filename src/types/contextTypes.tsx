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
  updateGroupChats: (arg: GroupType, type: string) => void;
  updateChannelChats: (arg: GroupType, type: string) => void;
};

export type workspaceNavigatorContextType = {
  selectedChatWindow: ChatWindowDataType;
  setSelectedChatWindow: (a: ChatWindowDataType) => void;
};

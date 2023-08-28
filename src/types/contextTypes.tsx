import {
  ChatWindowDataType,
  DirectChatProfileType,
  UserDataType
} from './dataTypes';

export type workspaceContextType = {
  selectedChatWindow: ChatWindowDataType;
  directChatProfiles: DirectChatProfileType[];
  groupChats: any;
  channels: any;
  setSelectedChatWindow: (a: ChatWindowDataType) => void;
};

import { ChatWindowDataType, UserDataType } from './dataTypes';

export type workspaceContextType = {
  selectedChatWindow: ChatWindowDataType;
  directChatProfiles: any;
  groupChats: any;
  channels: any;
  setSelectedChatWindow: (a: ChatWindowDataType) => void;
};

export type UserContextType = {
  user: UserDataType;
  loginCallback: (token: string) => void;
  logoutCallback: () => void;
};

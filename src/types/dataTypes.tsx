export type ChatUser = {
  id: number;
  name: string;
  imageSrc: string;
};

export type MessageDataType = {
  id: number;
  timestamp: number;
  sendorId: number;
  recieverId: number;
  text: string;
  sendorAvatarSrc: string;
  sendorName: string;
};

export type ChatWindowDataType = {
  type: number;
  id: number;
} | null;

export type UserDataType = {
  id: number;
  name: string;
  imageSrc: string;
  groups: number[];
} | null;

export type DirectChatProfileType = {
  id: number;
  name: string;
  imageSrc: string;
  groups: number[];
};

export type GroupType = {
  id: number;
  name: string;
  type: number;
  members: number[];
  imageSrc: string;
};

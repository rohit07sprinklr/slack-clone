export type ChatUser = {
  id: number;
  name: string;
  imageSrc: string;
};

export type MessageDataType = {
  id: number;
  timestamp: number;
  sendorId: 2;
  recieverId: 1;
  text: string;
  sendorAvatarSrc: string;
  sendorName: string;
};

export type ChatWindowDataType = {
  type: number;
  id: number;
} | null;

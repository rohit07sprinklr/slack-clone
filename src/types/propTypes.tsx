import { MessageDataType } from './dataTypes';

export type MessageBoxPropType = {
  updateMessageCallback: (message: MessageDataType) => void;
};

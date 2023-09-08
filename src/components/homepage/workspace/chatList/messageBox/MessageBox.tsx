//libs
import { useState } from 'react';

//components
import {
  useWorkspace,
  useWorkspaceNavigator
} from '../../../../workspaceProvider/WorkspaceProvider';

//css
import './messageBox.css';

//utils
import {
  postMessagesFromChannelID,
  postMessagesFromChatID,
  postMessagesFromGroupID
} from '../../../../../httpServices/httpService';
import { CHAT_TYPE } from '../../../../../utils/constants';

//types
import { MessageDataType } from '../../../../../types/dataTypes';
type MessageBoxPropType = {
  updateMessageCallback: (message: MessageDataType) => void;
};

export default function MessageBox({
  updateMessageCallback
}: MessageBoxPropType) {
  const { selectedChatWindow } = useWorkspaceNavigator();
  const [textAreaActive, setTextAreaActive] = useState<boolean>(false);
  const [textInput, setTextInput] = useState<string>('');

  const handleOnFocus = () => {
    setTextAreaActive(true);
  };
  const handleOnBlur = () => {
    setTextAreaActive(false);
  };
  const handleInputChange = (e: any) => {
    const newInputValue = e.target.value;
    setTextInput(newInputValue);
  };
  const handleSubmit = async () => {
    const fetchFunction =
      selectedChatWindow?.type === CHAT_TYPE.DIRECT
        ? postMessagesFromChatID
        : selectedChatWindow?.type === CHAT_TYPE.CHANNEL
        ? postMessagesFromChannelID
        : postMessagesFromGroupID;
    if (selectedChatWindow) {
      const newMessageResponse = await fetchFunction(
        selectedChatWindow?.id,
        textInput
      );
      setTextInput('');

      updateMessageCallback(newMessageResponse);
    }
  };
  return (
    <div className="message_container">
      <div
        className={'message_input_container '.concat(
          textAreaActive ? '--active' : ''
        )}
      >
        <textarea
          className="message_input_container_textarea"
          value={textInput}
          onChange={handleInputChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          autoFocus
        />
        <button
          type="button"
          className="button"
          id="send_button"
          disabled={!textInput.length}
          onClick={handleSubmit}
        >
          <img
            src="assets/icons/send.svg"
            alt="send"
            width="20"
            height="20"
          ></img>
        </button>
      </div>
    </div>
  );
}

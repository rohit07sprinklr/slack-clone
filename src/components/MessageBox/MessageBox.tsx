import { useContext, useState } from 'react';
import './messageBox.css';
import { MessageBoxPropType } from '../../types/propTypes';
import {
  postMessagesFromChannelID,
  postMessagesFromChatID,
  postMessagesFromGroupID
} from '../../httpServices/httpService';
import { CHAT_TYPE } from '../../utils/constants';
import { useWorkspace } from '../WorkspaceProvider/WorkspaceProvider';

export default function MessageBox(props: MessageBoxPropType) {
  const { selectedChatWindow } = useWorkspace();
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
      props.updateMessageCallback(newMessageResponse);
    }
  };
  return (
    <div className="message_container">
      <div
        className={'message_input_container '.concat(
          textAreaActive ? 'active' : ''
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
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="20"
            height="20"
          >
            <path
              fill="#1D1C1D"
              d="M1.5 2.25a.755.755 0 0 1 1-.71l15.596 7.807a.73.73 0 0 1 0 1.306L2.5 18.46l-.076.018a.749.749 0 0 1-.924-.728v-4.54c0-1.21.97-2.229 2.21-2.25l6.54-.17c.27-.01.75-.24.75-.79s-.5-.79-.75-.79l-6.54-.17A2.253 2.253 0 0 1 1.5 6.789v-4.54Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

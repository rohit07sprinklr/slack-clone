import { useState } from 'react';
import './addInput.css';
import { postGroupChat } from '../../httpServices/httpService';
import { useWorkspace } from '../WorkspaceProvider/WorkspaceProvider';
import Loader from '../Loader/Loader';

//prop onSubmit
//define handleSubmit

//onCancel
type AddInputProps = {
  closeInput: () => void;
  handleInputSubmit: (name: string) => Promise<any>;
};
export const AddInput = ({handleSubmit, ...restProps}: AddInputProps) => {
  const [value, setValue] = useState<string>('');
  //loading
  const [loader, setLoader] = useState<boolean>(false);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleConfirmClick = async () => {
    if (value.trim().length === 0) return;
    setLoader(true);
    await handleSubmit(value);
    setLoader(false);
    props.closeInput();
  };
  const handleCancelClick = () => {
    props.closeInput();
  };
  return (
    <div className="add-input-container">
      <input
        className="add_input"
        value={value}
        onChange={handleChange}
        disabled={loader}
        autoFocus
      />
      {loader ? (
        <div className="add-input-loader">
          <Loader />
        </div>
      ) : (
        <>
          <button className="button" onClick={handleConfirmClick}>
            <img src="assets/icons/tick.svg" width={17} height={15} />
          </button>
          <button {...restProps} handleSubmit={handleSubmit} className="button" onClick={handleCancelClick}>
            X
          </button>
        </>
      )}
    </div>
  );
};

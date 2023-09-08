//libs
import { useState } from 'react';

//components
import Loader from '../../../../../loader/Loader';

//styles
import './addInput.css';

type AddInputProps = {
  onCancel: () => void;
  onSubmit: (name: string) => Promise<any>;
};
export const AddInput = ({ onSubmit, onCancel }: AddInputProps) => {
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleSubmit = async () => {
    if (value.trim().length === 0) return;
    setLoading(true);
    await onSubmit(value);
    setLoading(false);
    onCancel();
  };
  const handleCancel = () => {
    onCancel();
  };
  return (
    <div className="add-input-container">
      <input
        className="add_input"
        value={value}
        onChange={handleChange}
        disabled={loading}
        autoFocus
      />
      {loading ? (
        <Loader size="sm" />
      ) : (
        <>
          <button className="button" onClick={handleSubmit}>
            <img src="assets/icons/tick.svg" width={17} height={15} />
          </button>
          <button className="button" onClick={handleCancel}>
            X
          </button>
        </>
      )}
    </div>
  );
};

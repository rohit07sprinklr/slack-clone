//types
type InputProps = {
  value: string;
  label: string;
  handleChange: (e: any) => void;
  onFocus?: () => void;
  autoFocus?: boolean;
  type?: string;
  error?: boolean;
};

export function Input({
  value,
  label,
  handleChange,
  onFocus,
  autoFocus,
  type,
  error
}: InputProps) {
  const styleOverrides = error ? { border: '1px solid #c60e5c' } : {};
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <div className="login_input_container">
        <input
          className="login_input"
          style={styleOverrides}
          name={label}
          type={type || 'text'}
          value={value}
          onChange={handleChange}
          onFocus={onFocus}
          autoFocus={autoFocus}
        ></input>
        {error ? (
          <div id="input-error">
            <img src="assets/icons/warning.svg" className="error-icon" />
            Hold on! This field can't be blank.
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

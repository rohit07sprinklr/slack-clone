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

export function Input(props: InputProps) {
  const styleOverrides = props.error ? { border: '1px solid #c60e5c' } : {};
  return (
    <>
      <label htmlFor={props.label}>{props.label}</label>
      <div className="login_input_container">
        <input
          className="login_input"
          style={styleOverrides}
          name={props.label}
          type={props.type || 'text'}
          value={props.value}
          onChange={props.handleChange}
          onFocus={props.onFocus}
          autoFocus={props.autoFocus}
        ></input>
        {props.error ? (
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

//types
type InputProps = {
  value: string;
  label: string;
  handleChange: (e: any) => void;
  autoFocus?: boolean;
  type?: string;
  error?: boolean;
};

export function Input(props: InputProps) {
  const styleOverrides = props.error ? { border: '1px solid red' } : {};
  return (
    <>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        className="login_input"
        style={styleOverrides}
        name={props.label}
        type={props.type || 'text'}
        value={props.value}
        onChange={props.handleChange}
        autoFocus={props.autoFocus}
      ></input>
    </>
  );
}

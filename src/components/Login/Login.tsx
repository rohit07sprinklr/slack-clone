//libs
import { useCallback, useState } from 'react';

//components
import { LoginForm, SignupForm } from './Form';

export default function Login() {
  const [formSwitch, setformSwitch] = useState<boolean>(true);
  const toggleFormCallback = useCallback(() => {
    setformSwitch((state) => !state);
  }, []);
  return (
    <div className="login_container">
      {formSwitch ? (
        <LoginForm toggleFormCallback={toggleFormCallback} />
      ) : (
        <SignupForm toggleFormCallback={toggleFormCallback} />
      )}
    </div>
  );
}

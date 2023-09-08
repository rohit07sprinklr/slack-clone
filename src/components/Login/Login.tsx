//libs
import { useCallback, useState } from 'react';

//components
import { LoginForm, SignupForm } from './Form';
import { useQuery } from '../../Hooks/useQuery';
import { getHandshake } from '../../httpServices/httpService';

export default function Login() {
  const [formType, setFormType] = useState<boolean>(true);
  const { loading, error } = useQuery({
    queryFunction: getHandshake,
    enabled: true
  });
  const toggleFormCallback = useCallback(() => {
    setformSwitch((state) => !state);
  }, []);
  return (
    <div className="login_container">
      {formSwitch ? (
        <LoginForm
          toggleFormCallback={toggleFormCallback}
          handshakeLoading={loading || error}
        />
      ) : (
        <SignupForm
          toggleFormCallback={toggleFormCallback}
          handshakeLoading={loading || error}
        />
      )}
    </div>
  );
}

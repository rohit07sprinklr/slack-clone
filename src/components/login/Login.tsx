//libs
import { useCallback, useState } from 'react';

//components
import { LoginForm, SignupForm } from './Form';
import { useQuery } from '../../hooks/useQuery';
import { getHandshake } from '../../httpServices/httpService';

export default function Login() {
  const [formType, setformType] = useState<boolean>(true);
  const { loading, error } = useQuery({
    queryFunction: getHandshake
  });
  const toggleFormCallback = useCallback(() => {
    setformType((state) => !state);
  }, []);
  return (
    <div className="login_container">
      {formType ? (
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

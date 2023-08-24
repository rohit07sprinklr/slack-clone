import { useCallback, useState } from 'react';
import './mainpage.css';
import Login from '../Login/Login';
import Homepage from '../Homepage/Homepage';
import { UserProvider } from '../UserProvider/UserProvider';

export default function Mainpage() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const authenticateCallback = useCallback((state: boolean) => {
    setAuthenticated(state);
  }, []);
  return (
    <UserProvider authenticateCallback={authenticateCallback}>
      {authenticated ? <Homepage /> : <Login />}
    </UserProvider>
  );
}

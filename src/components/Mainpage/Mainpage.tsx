import { createContext, useCallback, useEffect, useState } from 'react';
import './mainpage.css';
import { UserDataType } from '../../types/dataTypes';
import Login from '../Login/Login';
import Homepage from '../Homepage/Homepage';
import { deleteStorage, getStorage, populateStorage } from '../../utils/utils';
import { UserContextType } from '../../types/contextTypes';

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export default function Mainpage() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserDataType>(null);

  useEffect(() => {
    if (getStorage('authenticated')) {
      setAuthenticated(true);
      setUser(getStorage('user'));
    }
  }, []);

  const loginCallback = useCallback((userData: UserDataType) => {
    populateStorage('authenticated', true);
    populateStorage('user', userData);
    setUser(userData);
    setAuthenticated(true);
  }, []);

  const logoutCallback = useCallback(() => {
    deleteStorage('authenticated');
    deleteStorage('user');
    setAuthenticated(false);
    window.location.reload();
  }, []);
  return (
    <>
      {authenticated ? (
        <UserContext.Provider
          value={{
            user,
            logoutCallback
          }}
        >
          <Homepage />
        </UserContext.Provider>
      ) : (
        <Login loginCallback={loginCallback} />
      )}
    </>
  );
}

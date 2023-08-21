import { createContext, useCallback, useEffect, useState } from 'react';
import './mainpage.css';
import { UserDataType } from '../../types/dataTypes';
import Login from '../Login/Login';
import Homepage from '../Homepage/Homepage';
import { deleteStorage, getStorage, populateStorage } from '../../utils/utils';
import { UserContextType } from '../../types/contextTypes';
import { getProfile } from '../../httpServices/httpService';

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export default function Mainpage() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserDataType>(null);

  const fetchAndPopulateProfile = async () => {
    const userData = await getProfile();
    setUser(userData);
  };

  useEffect(() => {
    if (getStorage('token')) {
      fetchAndPopulateProfile();
      setAuthenticated(true);
    }
  }, []);

  const loginCallback = useCallback(() => {
    fetchAndPopulateProfile();
    setAuthenticated(true);
  }, []);

  const logoutCallback = useCallback(() => {
    deleteStorage('token');
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

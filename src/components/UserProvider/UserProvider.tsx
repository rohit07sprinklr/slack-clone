import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { UserContextType } from '../../types/contextTypes';
import { UserDataType } from '../../types/dataTypes';
import { deleteStorage, getStorage } from '../../utils/utils';
import { getProfile } from '../../httpServices/httpService';

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

function UserProvider({ authenticateCallback, children }: any) {
  const [user, setUser] = useState<UserDataType>(null);

  const fetchAndPopulateProfileCallback = async () => {
    const userData = await getProfile();
    setUser(userData);
  };
  useEffect(() => {
    if (getStorage('token')) {
      fetchAndPopulateProfileCallback();
      authenticateCallback(true);
    }
    return () => {
      authenticateCallback(false);
    };
  }, []);

  const loginCallback = useCallback(() => {
    fetchAndPopulateProfileCallback();
    authenticateCallback(true);
  }, []);

  const logoutCallback = useCallback(() => {
    deleteStorage('token');
    window.location.reload();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        logoutCallback,
        loginCallback
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { UserProvider, useUser };

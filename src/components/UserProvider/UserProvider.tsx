//libs
import { ReactNode, createContext, useCallback, useContext } from 'react';

//types
import { UserDataType } from '../../types/dataTypes';
type UserProviderProps = {
  children: ReactNode;
  user: UserDataType;
};

export const UserContext = createContext<UserDataType | undefined>(undefined);

function UserProvider({ user, children }: UserProviderProps) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { UserProvider, useUser };

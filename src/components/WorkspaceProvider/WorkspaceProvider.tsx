//libs
import { createContext, useCallback, useContext, useState } from 'react';

//utils
import {
  getChannelChat,
  getDirectChatProfiles,
  getGroupChat
} from '../../httpServices/httpService';

//hooks
import { useQuery } from '../../hooks/useQuery';

//types
import { ChatWindowDataType } from '../../types/dataTypes';
import {
  workspaceContextType,
  workspaceNavigatorContextType
} from '../../types/contextTypes';

export const WorkspaceContext = createContext<workspaceContextType | undefined>(
  undefined
);

export const WorkspaceNavigatorContext = createContext<
  workspaceNavigatorContextType | undefined
>(undefined);

function WorkspaceProvider({ children }: any) {
  const { data: directChatProfiles } = useQuery({
    queryFunction: getDirectChatProfiles
  });
  const { data: groupChats, updateData: updateGroupChats } = useQuery({
    queryFunction: getGroupChat
  });
  const { data: channels, updateData: updateChannelChats } = useQuery({
    queryFunction: getChannelChat
  });

  const [selectedChatWindow, setSelectedChatWindow] =
    useState<ChatWindowDataType>(null);

  return (
    <WorkspaceContext.Provider
      value={{
        directChatProfiles,
        channels,
        groupChats,
        updateChannelChats,
        updateGroupChats
      }}
    >
      <WorkspaceNavigatorContext.Provider
        value={{
          selectedChatWindow,
          setSelectedChatWindow
        }}
      >
        {children}
      </WorkspaceNavigatorContext.Provider>
    </WorkspaceContext.Provider>
  );
}

function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

function useWorkspaceNavigator() {
  const context = useContext(WorkspaceNavigatorContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { WorkspaceProvider, useWorkspace, useWorkspaceNavigator };

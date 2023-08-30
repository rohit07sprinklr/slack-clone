//libs
import { createContext, useContext, useState } from 'react';

//utils
import {
  getChannelChat,
  getDirectChatProfiles,
  getGroupChat
} from '../../httpServices/httpService';

//types
import { ChatWindowDataType } from '../../types/dataTypes';
import {
  workspaceContextType,
  workspaceNavigatorContextType
} from '../../types/contextTypes';
import { useQuery } from '../../Hooks/useQuery';

export const WorkspaceContext = createContext<workspaceContextType | undefined>(
  undefined
);

export const WorkspaceNavigatorContext = createContext<
  workspaceNavigatorContextType | undefined
>(undefined);

function WorkspaceProvider({ children }: any) {
  const updateFunction = (
    prevData: { id: number; [key: string]: any }[],
    newData: { id: number; [key: string]: any },
    type: string
  ) => {
    switch (type) {
      case 'POST': {
        return [...prevData, { ...newData }];
      }
      case 'PATCH': {
        return [...prevData].map((data) =>
          data.id === newData.id ? newData : data
        );
      }
      default: {
        throw Error('No methods defined for this type');
      }
    }
  };
  const { data: directChatProfiles, updateData: updateDirectChatProfiles } =
    useQuery({
      queryFunction: getDirectChatProfiles,
      updateFunction: updateFunction,
      enabled: true,
      refetchProps: []
    });
  const { data: groupChats, updateData: updateGroupChats } = useQuery({
    queryFunction: getGroupChat,
    updateFunction: updateFunction,
    enabled: true,
    refetchProps: []
  });
  const { data: channels, updateData: updateChannelChats } = useQuery({
    queryFunction: getChannelChat,
    updateFunction: updateFunction,
    enabled: true,
    refetchProps: []
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

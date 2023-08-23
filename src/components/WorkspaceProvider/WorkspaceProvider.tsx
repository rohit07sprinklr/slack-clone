import { createContext, useContext, useEffect, useState } from 'react';
import { ChatWindowDataType } from '../../types/dataTypes';
import {
  getChannelChat,
  getDirectChatProfiles,
  getGroupChat
} from '../../httpServices/httpService';
import { workspaceContextType } from '../../types/contextTypes';

export const WorkspaceContext = createContext<workspaceContextType | undefined>(
  undefined
);

function WorkspaceProvider({ children }: any) {
  const [directChatProfiles, setDirectChatProfiles] = useState([]);
  const [groupChats, setGroupChats] = useState([]);
  const [channels, setChannels] = useState([]);

  const [selectedChatWindow, setSelectedChatWindow] =
    useState<ChatWindowDataType>(null);

  useEffect(() => {
    async function fetchDirectChatProfiles() {
      const profiles = await getDirectChatProfiles();
      setDirectChatProfiles(profiles['profiles']);
    }
    fetchDirectChatProfiles();
  }, []);

  useEffect(() => {
    async function fetchGroupChats() {
      const groups = await getGroupChat();
      setGroupChats(groups['groups']);
    }
    fetchGroupChats();
  }, []);

  useEffect(() => {
    async function fetchChannels() {
      const channels = await getChannelChat();
      setChannels(channels['channels']);
    }
    fetchChannels();
  }, []);
  return (
    <WorkspaceContext.Provider
      value={{
        selectedChatWindow,
        directChatProfiles,
        channels,
        groupChats,
        setSelectedChatWindow
      }}
    >
      {children}
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

export { WorkspaceProvider, useWorkspace };

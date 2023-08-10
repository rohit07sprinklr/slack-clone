import { createContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Topbar from '../Topbar/Topbar';
import Workspace from '../Workspace/Workspace';
import './mainpage.css';
import {
  getChannelChat,
  getDirectChatProfiles,
  getGroupChat
} from '../../httpServices/httpService';
import { workspaceContextType } from '../../types/contextTypes';
import { ChatWindowDataType } from '../../types/dataTypes';

export const WorkspaceContext = createContext<workspaceContextType>(
  {} as workspaceContextType
);

export default function Mainpage() {
  const [selectedChatWindow, setSelectedChatWindow] =
    useState<ChatWindowDataType>({ type: 0, id: 0 });
  // const [selectedChatId,setSelectedChatId] = useState(1);
  const [directChatProfiles, setDirectChatProfiles] = useState([]);
  const [groupChats, setGroupChats] = useState([]);
  const [channels, setChannels] = useState([]);

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
    <div className="mainpage">
      <Topbar />
      <div className="mainpage_content_container">
        <WorkspaceContext.Provider
          value={{
            selectedChatWindow,
            directChatProfiles,
            channels,
            groupChats,
            setSelectedChatWindow
          }}
        >
          <Navbar />
          <Workspace />
        </WorkspaceContext.Provider>
      </div>
    </div>
  );
}

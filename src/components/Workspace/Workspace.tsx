//components
import ChatList from '../ChatList/ChatList';
import Bookmarks from '../Bookmarks/Bookmarks';
import { WorkspaceHeader } from '../WorkspaceHeader/WorkspaceHeader';

//hooks
import {
  useWorkspace,
  useWorkspaceNavigator
} from '../WorkspaceProvider/WorkspaceProvider';

//styles
import './workspace.css';

export default function Workspace() {
  const { selectedChatWindow } = useWorkspaceNavigator();

  if (selectedChatWindow?.type && selectedChatWindow?.id) {
    return (
      <div className="workspace">
        <WorkspaceHeader />
        <Bookmarks />
        <ChatList
          key={`${selectedChatWindow?.type}_${selectedChatWindow?.id}`}
        />
      </div>
    );
  } else {
    return (
      <div className="workspace welcome">
        <div className="welcome_header">
          <img src="assets/waving_hand.png"></img>
          <span>Welcome!</span>
        </div>
        <div className="welcome_subheader">
          <span>Slack is a messaging app for teams</span>
        </div>
      </div>
    );
  }
}

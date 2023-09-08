//components
import Workspace from './workspace/Workspace';
import { WorkspaceProvider } from '../workspaceProvider/WorkspaceProvider';
import Navbar from './navbar/Navbar';
import Topbar from './topbar/Topbar';

//css
import './homepage.css';

export default function Homepage() {
  return (
    <div className="homepage">
      <Topbar />
      <div className="homepage_content_container">
        <WorkspaceProvider>
          <Navbar />
          <Workspace />
        </WorkspaceProvider>
      </div>
    </div>
  );
}

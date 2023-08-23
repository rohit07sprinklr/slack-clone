import Navbar from '../Navbar/Navbar';
import Topbar from '../Topbar/Topbar';
import Workspace from '../Workspace/Workspace';
import './homepage.css';
import { WorkspaceProvider } from '../WorkspaceProvider/WorkspaceProvider';

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

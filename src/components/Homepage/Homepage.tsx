//components
import Workspace from '../Workspace/Workspace';
import { WorkspaceProvider } from '../WorkspaceProvider/WorkspaceProvider';
import Navbar from '../Navbar/Navbar';
import Topbar from '../Topbar/Topbar';

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

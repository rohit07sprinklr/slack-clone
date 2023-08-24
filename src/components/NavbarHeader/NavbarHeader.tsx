import { ArrowIconElement } from '../IconElement/ArrowIconElement';
import { NewMessageIconElement } from '../IconElement/NewMessageIconElement';
import './navbarHeader.css';

export default function NavbarHeader() {
  return (
    <div className="navbar_header">
      <div className="button navbar_header_info">
        Workspace
        <ArrowIconElement />
      </div>
      <button className="navbar_header_newButton">
        <NewMessageIconElement />
      </button>
    </div>
  );
}

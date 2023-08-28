//styles
import './navbarHeader.css';

export default function NavbarHeader() {
  return (
    <div className="navbar_header">
      <div className="button navbar_header_info">
        Workspace
        <img src="assets/icons/arrow-down-tr.svg" width="18" height="18" />
      </div>
      <button className="navbar_header_newButton">
        <img src="assets/icons/new.svg" width="18" height="18" />
      </button>
    </div>
  );
}

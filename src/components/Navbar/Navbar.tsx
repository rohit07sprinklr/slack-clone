//components
import NavbarHeader from '../NavbarHeader/NavbarHeader';
import QuickAccess from '../QuickAccess/QuickAccess';
import NavbarChatList from '../NavbarChatList/NavbarChatList';

//styles
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <NavbarHeader />
      <QuickAccess />
      <NavbarChatList />
    </div>
  );
}

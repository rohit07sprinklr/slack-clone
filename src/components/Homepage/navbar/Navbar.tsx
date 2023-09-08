//components
import NavbarHeader from './navbarHeader/NavbarHeader';
import QuickAccess from './quickAccess/QuickAccess';
import NavbarChatList from './navbarChatList/NavbarChatList';

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

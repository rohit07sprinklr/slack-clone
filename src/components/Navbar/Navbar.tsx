import NavbarHeader from '../NavbarHeader/NavbarHeader';
import QuickAccess from '../QuickAccess/QuickAccess';
import NavbarChatList from '../NavbarChatList/NavbarChatList';
import './navbar.css';

export default function Navbar(props: any) {
  return (
    <div className="navbar">
      <NavbarHeader />
      <QuickAccess />
      <NavbarChatList />
    </div>
  );
}

import Huddle from '../Huddle/Huddle'
import NavbarHeader from '../NavbarHeader/NavbarHeader'
import QuickAccess from '../QuickAccess/QuickAccess'
import UserChatList from '../UserChatList/UserChatList'
import './navbar.css'
export default function Navbar(){
    return (
        <div className="navbar">
            <NavbarHeader/>
            <QuickAccess/>
            <UserChatList/>
            <Huddle/>
        </div>
    )
}
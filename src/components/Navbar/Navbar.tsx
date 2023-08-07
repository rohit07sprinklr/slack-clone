import Huddle from '../Huddle/Huddle'
import NavbarHeader from '../NavbarHeader/NavbarHeader'
import QuickAccess from '../QuickAccess/QuickAccess'
import UserChatList from '../UserChatList/UserChatList'
import './navbar.css'

export default function Navbar(props:any){
    return (
        <div className="navbar">
            <NavbarHeader/>
            <QuickAccess/>
            <UserChatList directChatProfiles={props.directChatProfiles} />
            <Huddle/>
        </div>
    )
}
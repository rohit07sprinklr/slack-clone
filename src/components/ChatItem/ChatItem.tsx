import { useContext } from 'react'
import Avatar from '../Avatar/Avatar'
import './chatItem.css'
import { WorkspaceContext } from '../Mainpage/Mainpage'

export default function ChatItem(props:{profileID:number, profileName:string, profileAvatar:string }){
    const {setSelectedChatId} = useContext(WorkspaceContext)
    return(
        <button className='button navbar_quick_access_menu' onClick={()=>setSelectedChatId(props.profileID)}>
                <Avatar size='small' avatarSrc={props.profileAvatar} />
                <div className='navbar_quick_access_menu_title'>
                {props.profileName}
                </div>
            </button>
    )
}
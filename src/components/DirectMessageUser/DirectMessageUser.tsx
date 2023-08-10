import { useContext } from 'react'
import Avatar from '../Avatar/Avatar'
import './DirectMessageUser.css'
import { WorkspaceContext } from '../Mainpage/Mainpage'
import { CHAT_TYPE } from '../../utils/constants'

export default function DirectMessageUser(props:{profileID:number, profileName:string, profileAvatar:string }){
    const {selectedChatWindow,setSelectedChatWindow} = useContext(WorkspaceContext)
    return(
        <button className={'button navbar_quick_access_menu'}
            id = {selectedChatWindow.type === CHAT_TYPE.DIRECT && selectedChatWindow.id === props.profileID? 'active':''} 
            onClick={()=>setSelectedChatWindow({type:CHAT_TYPE.DIRECT,id:props.profileID})}>
                <Avatar size='small' avatarSrc={props.profileAvatar} />
                <div className='navbar_quick_access_menu_title'>
                {props.profileName}
                </div>
            </button>
    )
}
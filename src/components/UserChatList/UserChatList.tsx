import ChatItem from '../ChatItem/ChatItem'
import MenuItem from '../MenuItem/MenuItem'
import './userChatList.css'

function ChannelIconElement(){
    return(
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-1qi="true" aria-hidden="true" data-qa="sidebar-channel-icon-prefix" data-sidebar-channel-icon="channel" viewBox="0 0 20 20" width="16" height="16"><path fill="#FFFFFF" fill-rule="evenodd" d="M9.74 3.878a.75.75 0 1 0-1.48-.255L7.68 7H3.75a.75.75 0 0 0 0 1.5h3.67L6.472 14H2.75a.75.75 0 0 0 0 1.5h3.463l-.452 2.623a.75.75 0 0 0 1.478.255l.496-2.878h3.228l-.452 2.623a.75.75 0 0 0 1.478.255l.496-2.878h3.765a.75.75 0 0 0 0-1.5h-3.506l.948-5.5h3.558a.75.75 0 0 0 0-1.5h-3.3l.54-3.122a.75.75 0 0 0-1.48-.255L12.43 7H9.2l.538-3.122ZM11.221 14l.948-5.5H8.942L7.994 14h3.228Z" clip-rule="evenodd" fill-opacity="0.7"></path></svg>
    )
}
export default function UserChatList(props:any){
    return(
        <div className='navbar_chatList'>
            <div className='navbar_chatList_item'>
                <div className='navbar_chatList_options'>
                    <button className='button navbar_chatList_button'><span className='navbar_chatList_arrow expanded'></span></button>
                    <button className='button'>
                        Channels
                    </button>
                </div>
                <MenuItem title='clone' svgComponent={ChannelIconElement()}/>
                <MenuItem title='general' svgComponent={ChannelIconElement()}/>
                <MenuItem title='random' svgComponent={ChannelIconElement()}/>
            </div>
            <div className='navbar_chatList_item'>
                <div className='navbar_chatList_options'>
                    <button className='button navbar_chatList_button'><span className='navbar_chatList_arrow expanded'></span></button>
                    <button className='button'>
                        Direct messages
                    </button>
                </div>
                {
                    props.directChatProfiles.map((profile:any)=>(   
                        <ChatItem key={profile.id} profileID={profile.id} profileName={profile.name} profileAvatar={profile.imageSrc}/>
                    ))
                }   
            </div>
        </div>
    )
}
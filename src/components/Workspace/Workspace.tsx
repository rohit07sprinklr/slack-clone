import ChatList from '../ChatList/ChatList'
import MessageBox from '../MessageBox/MessageBox'
import './workspace.css'
import Bookmarks from '../Bookmarks/Bookmarks'
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader'
import { useContext, useEffect, useState } from 'react'
import { WorkspaceContext } from '../Mainpage/Mainpage'
import { getMessagesFromChannelID, getMessagesFromChatID, getMessagesFromGroupID } from '../../httpServices/httpService'
import { MessageDataType } from '../../types/dataTypes'
import { CHAT_TYPE } from '../../utils/constants'

export default function Workspace(){
    const {selectedChatWindow} = useContext(WorkspaceContext);
    const [messageList, setMessageList] = useState<MessageDataType[]>([]);

    
    useEffect(()=>{
        const fetchMessages = async ()=>{
            const fetchFunction = selectedChatWindow.type === CHAT_TYPE.DIRECT? getMessagesFromChatID: selectedChatWindow.type === CHAT_TYPE.CHANNEL? getMessagesFromChannelID: getMessagesFromGroupID
            const currMessageList = await fetchFunction(selectedChatWindow.id);
            setMessageList(currMessageList['messages'])
        }   
        if(selectedChatWindow.type && selectedChatWindow.id)
            fetchMessages();
    },[selectedChatWindow])

    const updateMessageCallback = (newMessageObj: MessageDataType)=>{
        setMessageList([...messageList, {...newMessageObj}]);
    }

    return (
        <div className="workspace">
            <WorkspaceHeader/>
            <Bookmarks/>
            <ChatList messageList={messageList}/>
            <MessageBox key={`${selectedChatWindow.type}_${selectedChatWindow.id}`} updateMessageCallback={updateMessageCallback}/>
        </div>
    )
}
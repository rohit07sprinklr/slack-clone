import ChatList from '../ChatList/ChatList'
import MessageBox from '../MessageBox/MessageBox'
import './workspace.css'
import Bookmarks from '../Bookmarks/Bookmarks'
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader'
import { useContext, useEffect, useState } from 'react'
import { WorkspaceContext } from '../Mainpage/Mainpage'
import { getMessagesFromChatID } from '../../httpServices/httpService'
import { MessageDataType } from '../../types/dataTypes'

export default function Workspace(){
    const {selectedChatId} = useContext(WorkspaceContext);
    const [messageList, setMessageList] = useState<MessageDataType[]>([]);
    
    useEffect(()=>{
        const fetchMessagesFromChatId = async ()=>{
            const currMessageList = await getMessagesFromChatID(selectedChatId);
            setMessageList(currMessageList['messages'])
        }   
        if(selectedChatId)
            fetchMessagesFromChatId();
    },[selectedChatId])

    const updateMessageCallback = (newMessageObj: MessageDataType)=>{
        setMessageList([...messageList, {...newMessageObj}]);
    }

    return (
        <div className="workspace">
            <WorkspaceHeader/>
            <Bookmarks/>
            <ChatList messageList={messageList}/>
            <MessageBox key={selectedChatId} updateMessageCallback={updateMessageCallback}/>
        </div>
    )
}
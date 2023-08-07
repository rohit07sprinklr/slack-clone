import { useContext, useEffect, useState } from 'react';
import DateChat from '../DateChat/dateChat';
import './chatList.css'
import { WorkspaceContext } from '../Mainpage/Mainpage';
import { getMessagesFromChatID } from '../../httpServices/httpService';
import { groupByDate } from '../../utils/utils';
// import {msgArr} from './dummy'
export default function ChatList(){
    const {selectedChatId} = useContext(WorkspaceContext);
    const [messageList, setMessageList] = useState({} as {[key:string]:[]});
    
    useEffect(()=>{
        const fetchMessagesFromChatId = async ()=>{
            const currMessageList = await getMessagesFromChatID(selectedChatId);
            console.log(currMessageList)
            const groupedMessageList = groupByDate(currMessageList['messages']);
            setMessageList(groupedMessageList)
        }   
        if(selectedChatId)
            fetchMessagesFromChatId();
    },[selectedChatId])

    // const msgGrouped = groupByDate(msgArr)
    return(
        <div className='chat_list_container'>
            {
                Object.keys(messageList).map((key:string)=>{
                    return <DateChat date={key} chatList={messageList[key]}/>
                })
            }
            <div className='chat_list_container_anchor'></div>
        </div>
    )
}
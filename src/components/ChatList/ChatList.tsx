import DateChat from '../DateChat/dateChat';
import './chatList.css'
import { groupByDate } from '../../utils/utils';
import { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { WorkspaceContext } from '../Mainpage/Mainpage';

export default function ChatList(props:{messageList:any}){
    const {selectedChatId} = useContext(WorkspaceContext);
    const groupedMessageList = groupByDate(props.messageList);
    const containerRef = useRef<HTMLDivElement>(null);

    // useEffect(()=>{
    //     if(containerRef.current?.scrollHeight){
    //         containerRef.current.scrollTop = containerRef.current?.scrollHeight
    //     }
    // },[props.messageList.length])
    useLayoutEffect(()=>{
        if(containerRef.current?.scrollHeight){
            containerRef.current.scrollTop = containerRef.current?.scrollHeight
        }
    },[props.messageList.length])
    
    return(
        <div ref={containerRef} className='chat_list_container'>
            {
                Object.keys(groupedMessageList).map((key:string, itr)=>{
                    return <DateChat date={key} key={itr} chatList={groupedMessageList[key]}/>
                })
            }
        </div>
    )
}
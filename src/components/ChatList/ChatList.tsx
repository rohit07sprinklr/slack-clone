import DateChat from '../DateChat/dateChat';
import './chatList.css'
import {msgArr} from './dummy'
export default function ChatList(){
    const getDateFromTimestamp = (timeStamp:number):string=>{
        const dateTimeJS =  new Date(timeStamp * 1000);
        return `${dateTimeJS.getDate()}-${dateTimeJS.getMonth()}-${dateTimeJS.getFullYear()}`
    }
    const groupByDate = (msgArr:any)=>{
        return msgArr.reduce((map:any, itm:any)=>{
            const currDate = getDateFromTimestamp(itm.timestamp)
            return {
                ...map,
                [currDate]:[...(map[currDate]||[]),itm]
            }
        },{} as { [key: string]: [] })
    }
    const msgGrouped = groupByDate(msgArr)
    return(
        <div className='chat_list_container'>
            {
                Object.keys(msgGrouped).map((key)=>{
                    return <DateChat date={key} chatList={msgGrouped[key]}/>
                })
            }
            <div className='chat_list_container_anchor'></div>
        </div>
    )
}
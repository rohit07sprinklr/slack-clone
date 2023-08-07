import Avatar from "../Avatar/Avatar";
import './singleChat.css'
export default function SingleChat(props:any){
    console.log(props)
    const getUserName = (userID:number)=>{
        return userID === 1? "Rohit Kumar":"Rahul Kumar"
    }
    const getTimeFromTimestamp = (timestamp:number)=>{
        const dateObject = new Date(timestamp * 1000);
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();
        const period = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${period}`;
    }
    return(
        <div className="chat-message-container">
            <Avatar size={'large'} userID={props.userID} />
            <div className="chat-desc">
                <div className="chat-desc-header">
                    <div id="chat-desc-header-name">{getUserName(props.userID)}</div>
                    <div id="chat-desc-header-timestamp">{getTimeFromTimestamp(props.timestamp)}</div>
                    
                </div>
                <div className="chat-desc-text">{props.text}</div>
            </div>
        </div>
    )
}
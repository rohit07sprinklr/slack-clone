import SingleChat from '../SingleChat/singleChat';
import './dateChat.css'
export default function DateChat(props:any){
    console.log(props.chatList)
    function formatDate(inputDate:string) {
        const months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
      
        const parts = inputDate.split("-");
        const day = parseInt(parts[0]);
        const monthIndex = parseInt(parts[1]) - 1; // Months are zero-indexed
        const year = parseInt(parts[2]);
      
        const dateObject = new Date(year, monthIndex, day);
        
        const dayOfWeek = dateObject.toLocaleDateString("en-US", { weekday: "long" });
        const monthName = months[monthIndex];
        const daySuffix = getDaySuffix(day);
      
        return `${dayOfWeek}, ${monthName} ${day}${daySuffix}`;
      }
      
    function getDaySuffix(day:number) {
        if (day >= 11 && day <= 13) {
            return "th";
        }
        switch (day % 10) {
            case 1:
            return "st";
            case 2:
            return "nd";
            case 3:
            return "rd";
            default:
            return "th";
        }
    }
      
    return(
    <div className="date-chat-container">
        <div className="date-chat-divider">
            <button className="button" id="date-divider-button">
                {formatDate(props.date)}
                <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-1qi="true" aria-hidden="true" viewBox="0 0 20 20" width="13" height="13"><path fill="#1D1C1D" fill-rule="evenodd" d="M5.72 7.47a.75.75 0 0 1 1.06 0L10 10.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L5.72 8.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        {
            props.chatList.map((chat:any)=>
                <SingleChat userID={chat.sendorID} key={chat.id} text={chat.text} timestamp={chat.timestamp}/>
            )
        }
    </div>
    ) 
}
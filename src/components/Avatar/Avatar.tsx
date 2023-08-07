import './avatar.css'

export default function Avatar(props:any){
    const getAvatarSrc = (userID:number)=>{
        return 'assets/avatar'+userID.toString()+'.png'
    }
    return(
            <img src={getAvatarSrc(props.userID)} className={'avatar-container '+props.size}></img>
    )
}
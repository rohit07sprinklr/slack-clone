import { useState } from 'react'
import './messageBox.css'

export default function MessageBox(){
    const [textAreaActive, setTextAreaActive] = useState<boolean>(false);
    const handleOnFocus = ()=>{
        setTextAreaActive(true)
    }
    const handleOnBlur = ()=>{
        setTextAreaActive(false)
    }
    return(
        <div className='message_container'>
            <div className={'message_input_container '.concat(textAreaActive?'active':'')}>
                <textarea className='message_input_container_textarea' onFocus={handleOnFocus} onBlur={handleOnBlur} autoFocus/>
            </div>
        </div>
    )
}
import ChatList from '../ChatList/ChatList'
import MessageBox from '../MessageBox/MessageBox'
import './workspace.css'
export default function Workspace(){
    return (
        <div className="workspace">
            <div className='workspace_item'>
                    <button className='button workspace_item_button'>
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-1qi="true" aria-hidden="true" viewBox="0 0 20 20" width="18" height="18"><path fill="#1D1C1D" fill-rule="evenodd" d="M9.984 4.176a1 1 0 0 0-1.968-.352L7.448 7H4a1 1 0 1 0 0 2h3.091l-.803 4.5H3a1 1 0 1 0 0 2h2.93l-.414 2.324a1 1 0 0 0 1.968.352l.478-2.676h2.719l-.415 2.324a1 1 0 1 0 1.968.352l.478-2.676H16a1 1 0 1 0 0-2h-2.93l.803-4.5H17a1 1 0 1 0 0-2h-2.77l.504-2.824a1 1 0 1 0-1.968-.352L12.198 7H9.48l.504-2.824Zm1.054 9.324L11.84 9H9.123l-.804 4.5h2.719Z" clip-rule="evenodd"></path></svg>
                        general
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-1qi="true" aria-hidden="true" viewBox="0 0 20 20" width="18" height="18"><path fill="#1D1C1D" fill-rule="evenodd" d="M5.72 7.47a.75.75 0 0 1 1.06 0L10 10.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L5.72 8.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg>
                    </button>
            </div>
            <div className='workspace_item workspace_item_bookmark'>
                    <button className='button workspace_item_button workspace_item_button_add_bookmark'>
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-1qi="true" aria-hidden="true" viewBox="0 0 20 20" width="13" height="13"><path fill="#1D1C1D" fill-rule="evenodd" d="M10.75 3.25a.75.75 0 0 0-1.5 0v6H3.251L3.25 10v-.75a.75.75 0 0 0 0 1.5V10v.75h6v6a.75.75 0 0 0 1.5 0v-6h6a.75.75 0 0 0 0-1.5h-6v-6Z" clip-rule="evenodd" fill-opacity="0.7"></path></svg>
                    Add a bookmark
                     </button>
            </div>
            <ChatList/>
            <MessageBox/>
        </div>
    )
}
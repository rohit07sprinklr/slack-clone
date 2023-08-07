import './menuItem.css'

export default function MenuItem(props:{title:string, svgComponent: any}){
    return(
        <button className='button navbar_quick_access_menu' >
                {props.svgComponent}
                <div className='navbar_quick_access_menu_title'>
                {props.title}
                </div>
            </button>
    )
}
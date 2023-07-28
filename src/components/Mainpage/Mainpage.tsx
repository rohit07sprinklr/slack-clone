import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Workspace from "../Workspace/Workspace";
import './mainpage.css'
export default function Mainpage(){
    return(
    <div className="mainpage">
        <Topbar/>
        <div className="mainpage_content_container">
            <Navbar/>
            <Workspace/>
        </div>
    </div>
    );
}
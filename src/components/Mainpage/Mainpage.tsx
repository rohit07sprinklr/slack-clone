import { createContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Workspace from "../Workspace/Workspace";
import './mainpage.css'
import { getDirectChatProfiles } from "../../httpServices/httpService";
import { workspaceContextType } from "../../types/contextTypes";

export const WorkspaceContext = createContext<workspaceContextType>({} as workspaceContextType );

export default function Mainpage(){
    const [selectedChatId,setSelectedChatId] = useState(0);
    const [directChatProfiles, setDirectChatProfiles] = useState([]);
    
    useEffect(()=>{
        async function fetchDirectChatProfiles(){
            const profiles = await getDirectChatProfiles();
            setDirectChatProfiles(profiles['profiles']);
        }
        fetchDirectChatProfiles();
    },[])

    return(
    <div className="mainpage">
        <Topbar/>
        <div className="mainpage_content_container">
            <WorkspaceContext.Provider value={{
                selectedChatId,
                setSelectedChatId
            }}>
                <Navbar directChatProfiles={directChatProfiles} />
                <Workspace/>
            </WorkspaceContext.Provider>
        </div>
    </div>
    );
}
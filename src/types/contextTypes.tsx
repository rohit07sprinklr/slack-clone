import { ChatWindowDataType } from "./dataTypes"

export type workspaceContextType = {
    selectedChatWindow: ChatWindowDataType,
    directChatProfiles: any,
    groupChats: any,
    channels:any,
    setSelectedChatWindow: (a:ChatWindowDataType)=>void
}
import { BASE_URL, DIRECT_CHATS, HTTP_METHODS } from "../utils/constants";

async function fetcher(url: string, params:any){
    const headers = new Headers();
    const options = {
        ...params,
        headers: headers,
    }
    return fetch(url,options);
}
async function getDirectChatProfiles(){
    const requestParams = {
        method:HTTP_METHODS.GET
    }
    const responses = await fetcher(BASE_URL + DIRECT_CHATS,requestParams)
    const result = await responses.json()
    return result
}
async function getMessagesFromChatID(chatID: number){
    const requestParams = {
        method:HTTP_METHODS.GET
    }
    const responses = await fetcher(BASE_URL + DIRECT_CHATS + `/${chatID}`,requestParams)
    const result = await responses.json()
    return result
}

export {getDirectChatProfiles, getMessagesFromChatID}
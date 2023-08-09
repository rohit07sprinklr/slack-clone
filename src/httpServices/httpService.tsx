import { BASE_URL, DIRECT_CHATS, HTTP_METHODS } from "../utils/constants";

async function fetcher(url: string, params:any){
    const headers = new Headers();
    const options = {
        ...params,
        headers: {...headers,
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
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

async function postMessagesFromChatID(chatID: number, text: string){
    const requestParams = {
        method:HTTP_METHODS.POST,
        body:JSON.stringify({message:text})
    }
    const responses = await fetcher(BASE_URL + DIRECT_CHATS + `/${chatID}`,requestParams)
    const result = await responses.json()
    return result
}

export {getDirectChatProfiles, getMessagesFromChatID, postMessagesFromChatID}
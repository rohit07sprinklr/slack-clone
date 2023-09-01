import {
  AUTH_KEY,
  BASE_URL,
  CHANNEL_CHATS,
  DIRECT_CHATS,
  GROUP_CHATS,
  HTTP_METHODS,
  LOGIN,
  PROFILE,
  SIGNUP
} from '../utils/constants';
import { getStorage } from '../utils/utils';

async function fetcher(url: string, params: any) {
  const headers = new Headers();
  const token = getStorage(AUTH_KEY);
  const options = {
    ...params,
    headers: {
      ...headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token
    }
  };
  return fetch(url, options);
}

async function getHandshake() {
  const requestParams = {
    method: HTTP_METHODS.GET
  };
  const headers = new Headers();
  const responses = await fetch(BASE_URL, {
    ...requestParams,
    headers: {
      ...headers,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const result = await responses.text();
  return result;
}

async function postLogin(email: string, password: string) {
  const requestParams = {
    method: HTTP_METHODS.POST,
    body: JSON.stringify({ email: email, password: password })
  };
  const headers = new Headers();
  const responses = await fetch(BASE_URL + LOGIN, {
    ...requestParams,
    headers: {
      ...headers,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result;
}

async function postSignup(email: string, password: string, name: string) {
  const requestParams = {
    method: HTTP_METHODS.POST,
    body: JSON.stringify({ email: email, password: password, name: name })
  };
  const headers = new Headers();
  const responses = await fetch(BASE_URL + SIGNUP, {
    ...requestParams,
    headers: {
      ...headers,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result;
}

async function getProfile() {
  const requestParams = {
    method: HTTP_METHODS.GET
  };
  const responses = await fetcher(BASE_URL + PROFILE, requestParams);
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result;
}

async function getDirectChatProfiles() {
  const requestParams = {
    method: HTTP_METHODS.GET
  };
  const responses = await fetcher(BASE_URL + DIRECT_CHATS, requestParams);
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result['profiles'];
}

async function getGroupChat() {
  const requestParams = {
    method: HTTP_METHODS.GET
  };
  const responses = await fetcher(BASE_URL + GROUP_CHATS, requestParams);
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result['groups'];
}
async function postGroupChat(groupName: string) {
  const requestParams = {
    method: HTTP_METHODS.POST,
    body: JSON.stringify({ name: groupName })
  };
  const responses = await fetcher(BASE_URL + GROUP_CHATS, requestParams);
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result;
}
async function getChannelChat() {
  const requestParams = {
    method: HTTP_METHODS.GET
  };
  const responses = await fetcher(BASE_URL + CHANNEL_CHATS, requestParams);
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result['channels'];
}
async function postChannelChat(channelName: string) {
  const requestParams = {
    method: HTTP_METHODS.POST,
    body: JSON.stringify({ name: channelName })
  };
  const responses = await fetcher(BASE_URL + CHANNEL_CHATS, requestParams);
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result;
}

async function getMessagesFromChatID(
  chatID: number | undefined,
  messageCount: number
) {
  const requestParams = {
    method: HTTP_METHODS.GET
  };
  const responses = await fetcher(
    BASE_URL + DIRECT_CHATS + `/${chatID}?limit=${messageCount}`,
    requestParams
  );
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return { data: result['messages'], pageLimit: result['pageLimit'] };
}
async function getMessagesFromChannelID(
  chatID: number | undefined,
  messageCount: number
) {
  const requestParams = {
    method: HTTP_METHODS.GET
  };
  const responses = await fetcher(
    BASE_URL + CHANNEL_CHATS + `/${chatID}?limit=${messageCount}`,
    requestParams
  );
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return { data: result['messages'], pageLimit: result['pageLimit'] };
}
async function getMessagesFromGroupID(
  chatID: number | undefined,
  messageCount: number
) {
  const requestParams = {
    method: HTTP_METHODS.GET
  };
  const responses = await fetcher(
    BASE_URL + GROUP_CHATS + `/${chatID}?limit=${messageCount}`,
    requestParams
  );
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return { data: result['messages'], pageLimit: result['pageLimit'] };
}

async function postMessagesFromChatID(chatID: number, text: string) {
  const requestParams = {
    method: HTTP_METHODS.POST,
    body: JSON.stringify({ message: text })
  };
  const responses = await fetcher(
    BASE_URL + DIRECT_CHATS + `/${chatID}`,
    requestParams
  );
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result;
}

async function postMessagesFromChannelID(chatID: number, text: string) {
  const requestParams = {
    method: HTTP_METHODS.POST,
    body: JSON.stringify({ message: text })
  };
  const responses = await fetcher(
    BASE_URL + CHANNEL_CHATS + `/${chatID}`,
    requestParams
  );
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result;
}

async function postMessagesFromGroupID(chatID: number, text: string) {
  const requestParams = {
    method: HTTP_METHODS.POST,
    body: JSON.stringify({ message: text })
  };
  const responses = await fetcher(
    BASE_URL + GROUP_CHATS + `/${chatID}`,
    requestParams
  );
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result;
}

async function patchGroup(chatID: number, members: number[]) {
  const requestParams = {
    method: HTTP_METHODS.PATCH,
    body: JSON.stringify({ members: members })
  };
  const responses = await fetcher(
    BASE_URL + GROUP_CHATS + `/${chatID}`,
    requestParams
  );
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result;
}

async function patchChannel(chatID: number, members: number[]) {
  const requestParams = {
    method: HTTP_METHODS.PATCH,
    body: JSON.stringify({ members: members })
  };
  const responses = await fetcher(
    BASE_URL + CHANNEL_CHATS + `/${chatID}`,
    requestParams
  );
  if (!responses.ok) {
    const error = await responses.text();
    throw Error(error);
  }
  const result = await responses.json();
  return result;
}

export {
  getDirectChatProfiles,
  getMessagesFromChatID,
  postMessagesFromChatID,
  getGroupChat,
  getChannelChat,
  getMessagesFromChannelID,
  getMessagesFromGroupID,
  postMessagesFromChannelID,
  postMessagesFromGroupID,
  postLogin,
  getProfile,
  postSignup,
  postGroupChat,
  postChannelChat,
  patchGroup,
  patchChannel,
  getHandshake
};

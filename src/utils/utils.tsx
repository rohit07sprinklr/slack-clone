import {
  getMessagesFromChannelID,
  getMessagesFromChatID,
  getMessagesFromGroupID
} from '../httpServices/httpService';
import { MessageDataType } from '../types/dataTypes';
import { CHAT_TYPE } from './constants';

export function populateStorage(field: string, value: any) {
  localStorage.setItem(field, JSON.stringify(value));
}

export function getStorage(field: string): any {
  const res = localStorage.getItem(field);
  if (res) return JSON.parse(res);
  return null;
}
export function deleteStorage(field: string) {
  localStorage.removeItem(field);
}

export const getDateFromTimestamp = (timeStamp: number): string => {
  const dateTimeJS = new Date(timeStamp * 1000);
  return `${dateTimeJS.getDate()}-${dateTimeJS.getMonth()}-${dateTimeJS.getFullYear()}`;
};
export const groupByDate = (
  msgArr: MessageDataType[]
): { [key: string]: MessageDataType[] } => {
  return msgArr.reduce(
    (map: any, itm: any) => {
      const currDate = getDateFromTimestamp(itm.timestamp);
      return {
        ...map,
        [currDate]: [...(map[currDate] || []), itm]
      };
    },
    {} as { [key: string]: [] }
  );
};
export function formatDate(inputDate: string) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const parts = inputDate.split('-');
  const day = parseInt(parts[0]);
  const monthIndex = parseInt(parts[1]) - 1;
  const year = parseInt(parts[2]);

  const dateObject = new Date(year, monthIndex, day);

  const dayOfWeek = dateObject.toLocaleDateString('en-US', { weekday: 'long' });
  const monthName = months[monthIndex];
  const daySuffix = getDaySuffix(day);

  return `${dayOfWeek}, ${monthName} ${day}${daySuffix}`;
}

export function getDaySuffix(day: number) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
export const getTimeFromTimestamp = (timestamp: number) => {
  const dateObject = new Date(timestamp * 1000);
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${period}`;
};

export const getFetchFunctionFromTypeID = (typeID: number | undefined) => {
  return typeID === CHAT_TYPE.DIRECT
    ? getMessagesFromChatID
    : typeID === CHAT_TYPE.CHANNEL
    ? getMessagesFromChannelID
    : typeID === CHAT_TYPE.GROUP
    ? getMessagesFromGroupID
    : async () => {};
};

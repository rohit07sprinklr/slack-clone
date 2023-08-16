import { useLayoutEffect, useRef } from 'react';
import { formatDate } from '../../utils/utils';
import SingleChat from '../SingleChat/singleChat';
import './dateChat.css';

export default function DateChat(props: any) {
  return (
    <div className="date-chat-container">
      <div className="date-chat-divider-button">
        <button className="button" id="date-divider-button">
          {formatDate(props.date)}
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            data-1qi="true"
            aria-hidden="true"
            viewBox="0 0 20 20"
            width="13"
            height="13"
          >
            <path
              fill="#1D1C1D"
              fill-rule="evenodd"
              d="M5.72 7.47a.75.75 0 0 1 1.06 0L10 10.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L5.72 8.53a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="date-chat-divider"></div>

      {props.chatList.map((chat: any) => (
        <SingleChat
          key={chat.id}
          userID={chat.sendorID}
          userName={chat.sendorName}
          userAvatar={chat.sendorAvatarSrc}
          text={chat.text}
          timestamp={chat.timestamp}
        />
      ))}
    </div>
  );
}

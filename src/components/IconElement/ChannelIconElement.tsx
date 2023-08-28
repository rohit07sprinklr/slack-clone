export function ChannelIconElement(props: {
  width?: string;
  height?: string;
  theme?: string;
}) {
  return props.theme === 'dark' ? (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      data-1qi="true"
      aria-hidden="true"
      viewBox="0 0 20 20"
      width={props.width || '16px'}
      height={props.height || '16px'}
    >
      <path
        fill="#1D1C1D"
        fillRule="evenodd"
        d="M9.984 4.176a1 1 0 0 0-1.968-.352L7.448 7H4a1 1 0 1 0 0 2h3.091l-.803 4.5H3a1 1 0 1 0 0 2h2.93l-.414 2.324a1 1 0 0 0 1.968.352l.478-2.676h2.719l-.415 2.324a1 1 0 1 0 1.968.352l.478-2.676H16a1 1 0 1 0 0-2h-2.93l.803-4.5H17a1 1 0 1 0 0-2h-2.77l.504-2.824a1 1 0 1 0-1.968-.352L12.198 7H9.48l.504-2.824Zm1.054 9.324L11.84 9H9.123l-.804 4.5h2.719Z"
        clipRule="evenodd"
      ></path>
    </svg>
  ) : (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      data-1qi="true"
      aria-hidden="true"
      data-qa="sidebar-channel-icon-prefix"
      data-sidebar-channel-icon="channel"
      viewBox="0 0 20 20"
      width={props.width || '16px'}
      height={props.height || '16px'}
    >
      <path
        fill="#FFFFFF"
        fillRule="evenodd"
        d="M9.74 3.878a.75.75 0 1 0-1.48-.255L7.68 7H3.75a.75.75 0 0 0 0 1.5h3.67L6.472 14H2.75a.75.75 0 0 0 0 1.5h3.463l-.452 2.623a.75.75 0 0 0 1.478.255l.496-2.878h3.228l-.452 2.623a.75.75 0 0 0 1.478.255l.496-2.878h3.765a.75.75 0 0 0 0-1.5h-3.506l.948-5.5h3.558a.75.75 0 0 0 0-1.5h-3.3l.54-3.122a.75.75 0 0 0-1.48-.255L12.43 7H9.2l.538-3.122ZM11.221 14l.948-5.5H8.942L7.994 14h3.228Z"
        clipRule="evenodd"
        fillOpacity="0.7"
      ></path>
    </svg>
  );
}

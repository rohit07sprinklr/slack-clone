import QuickAccess from '../QuickAccess/QuickAccess';
import './navbarHeader.css';

export default function NavbarHeader() {
  return (
    <div className="navbar_header">
      <div className="button navbar_header_info">
        Sprinklr
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          data-1qi="true"
          aria-hidden="true"
          viewBox="0 0 20 20"
          width="18"
          height="18"
        >
          <path
            fill="#FFFFFF"
            fill-rule="evenodd"
            d="M5.72 7.47a.75.75 0 0 1 1.06 0L10 10.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L5.72 8.53a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <button className="navbar_header_newButton">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          data-1qi="true"
          aria-hidden="true"
          viewBox="0 0 20 20"
          width="18"
          height="18"
        >
          <path
            fill="#3F0E40"
            fill-rule="evenodd"
            d="M16.707 3.268a1 1 0 0 0-1.414 0l-.482.482 1.439 1.44.482-.483a1 1 0 0 0 0-1.414l-.025-.025ZM15.19 6.25l-1.44-1.44-5.068 5.069-.431 1.871 1.87-.431L15.19 6.25Zm-.957-4.043a2.5 2.5 0 0 1 3.536 0l.025.025a2.5 2.5 0 0 1 0 3.536L11.03 12.53a.75.75 0 0 1-.361.2l-3.25.75a.75.75 0 0 1-.9-.899l.75-3.25a.75.75 0 0 1 .2-.361l6.763-6.763ZM5.25 4A2.25 2.25 0 0 0 3 6.25v8.5A2.25 2.25 0 0 0 5.25 17h8.5A2.25 2.25 0 0 0 16 14.75v-4.5a.75.75 0 1 1 1.5 0v4.5a3.75 3.75 0 0 1-3.75 3.75h-8.5a3.75 3.75 0 0 1-3.75-3.75v-8.5A3.75 3.75 0 0 1 5.25 2.5h4.5a.75.75 0 0 1 0 1.5h-4.5Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

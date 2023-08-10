import './searchBar.css';
export default function SearchBar() {
  return (
    <div className="button" id="topbar_center_searchbox">
      <button className="button topbar_center_searchbox_button">
        <svg
          xmlnsXlink="button http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="topbar_center_searchbox_icon"
        >
          <path
            fill="#FFFFFF"
            fill-rule="evenodd"
            d="M9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3ZM1.5 9a7.5 7.5 0 1 1 13.307 4.746l3.473 3.474a.75.75 0 1 1-1.06 1.06l-3.473-3.473A7.5 7.5 0 0 1 1.5 9Z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Search Dummy
      </button>

      <button className="button topbar_center_searchbox_button_filter">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="topbar_center_searchbox_icon"
        >
          <path
            fill="#FFFFFF"
            fill-rule="evenodd"
            d="M13.5 3.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.386.25a2.501 2.501 0 0 1 4.772 0h1.864a.75.75 0 0 1 0 1.5h-1.864a2.501 2.501 0 0 1-4.771 0H2.25a.75.75 0 0 1 0-1.5h8.864Zm-7 5.75a2.501 2.501 0 0 1 4.772 0h8.864a.75.75 0 0 1 0 1.5H8.886a2.501 2.501 0 0 1-4.772 0H2.25a.75.75 0 0 1 0-1.5h1.864ZM6.5 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6 5.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.386.25a2.501 2.501 0 0 1 4.772 0h2.864a.75.75 0 0 1 0 1.5h-2.864a2.501 2.501 0 0 1-4.771 0H2.25a.75.75 0 0 1 0-1.5h7.864Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

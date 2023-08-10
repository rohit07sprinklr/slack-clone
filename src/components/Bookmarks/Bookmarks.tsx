import './bookmarks.css';

export default function Bookmarks() {
  return (
    <div className="workspace_item workspace_item_bookmark">
      <button className="button workspace_item_button workspace_item_button_add_bookmark">
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
            d="M10.75 3.25a.75.75 0 0 0-1.5 0v6H3.251L3.25 10v-.75a.75.75 0 0 0 0 1.5V10v.75h6v6a.75.75 0 0 0 1.5 0v-6h6a.75.75 0 0 0 0-1.5h-6v-6Z"
            clip-rule="evenodd"
            fill-opacity="0.7"
          ></path>
        </svg>
        Add a bookmark
      </button>
    </div>
  );
}

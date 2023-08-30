import './bookmarks.css';

export default function Bookmarks() {
  return (
    <div className="workspace_item workspace_item_bookmark">
      <button className="button workspace_item_button workspace_item_button_add">
        <img
          src="assets/icons/add.svg"
          width="13"
          height="13"
          alt="add bookmark"
        ></img>
        Add a bookmark
      </button>
    </div>
  );
}

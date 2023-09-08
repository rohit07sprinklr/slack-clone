//styles
import './searchBar.css';

export default function SearchBar() {
  return (
    <div className="button" id="topbar_center_searchbox">
      <button className="button topbar_center_searchbox_button">
        <img
          src="assets/icons/search.svg"
          className="topbar_center_searchbox_icon"
        ></img>
        Search Dummy
      </button>

      <button className="button topbar_center_searchbox_button_filter">
        <img
          src="assets/icons/filter.svg"
          className="topbar_center_searchbox_icon"
        ></img>
      </button>
    </div>
  );
}

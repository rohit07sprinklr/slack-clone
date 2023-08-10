import HistoryButton from '../HistoryButton/HistoryButton';
import SearchBar from '../SearchBar/SearchBar';
import './topbar.css';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar_item topbar_item_left">
        <HistoryButton />
      </div>
      <div className="topbar_item topbar_item_center">
        <SearchBar />
      </div>
      <div className="topbar_item"></div>
      {/* <span style="font-weight:600;">Settings</span>
          <div class="search-bar">
            <span style="font-size:11px;">Search</span>
          </div>
        </div> */}
    </div>
  );
}

import { useContext } from 'react';
import Avatar from '../Avatar/Avatar';
import HistoryButton from '../HistoryButton/HistoryButton';
import SearchBar from '../SearchBar/SearchBar';
import './topbar.css';
import { useUser } from '../UserProvider/UserProvider';

export default function Topbar() {
  const { user } = useUser();
  return (
    <div className="topbar">
      <div className="topbar_item topbar_item_left">
        <HistoryButton />
      </div>
      <div className="topbar_item topbar_item_center">
        <SearchBar />
      </div>
      <div className="topbar_item topbar_item_right">
        {user ? (
          <button className="button" id="avatar_button">
            <Avatar avatarSrc={user?.imageSrc} size="medium" />
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

import { useContext } from 'react';
import Avatar from '../Avatar/Avatar';
import HistoryButton from '../HistoryButton/HistoryButton';
import SearchBar from '../SearchBar/SearchBar';
import './topbar.css';
import { UserContext } from '../Mainpage/Mainpage';

export default function Topbar() {
  const { user } = useContext(UserContext);
  console.log(user);
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
            <Avatar avatarSrc={user?.imageSrc} size="medium" />{' '}
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

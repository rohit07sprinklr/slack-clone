//components
import Avatar from '../Avatar/Avatar';
import HistoryButton from '../HistoryButton/HistoryButton';
import { Logout } from '../Logout/Logout';
import SearchBar from '../SearchBar/SearchBar';

//hooks
import { useUser } from '../UserProvider/UserProvider';

//styles
import './topbar.css';

export default function Topbar() {
  const user = useUser();
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
          <>
            <button className="button" id="avatar_button">
              <Avatar avatarSrc={user?.imageSrc} size="medium" />
            </button>
            <Logout />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

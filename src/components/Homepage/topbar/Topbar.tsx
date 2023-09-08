//components
import Avatar from '../../avatar/Avatar';
import HistoryButton from './historyButton/HistoryButton';
import { Logout } from '../../logout/Logout';
import SearchBar from './searchBar/SearchBar';

//hooks
import { useUser } from '../../userProvider/UserProvider';

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
              <Avatar avatarSrc={user?.imageSrc} size="--medium" />
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

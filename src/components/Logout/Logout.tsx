//utils
import { AUTH_KEY } from '../../utils/constants';
import { deleteStorage } from '../../utils/utils';

export function Logout() {
  const handleLogout = () => {
    deleteStorage(AUTH_KEY);
    window.location.reload();
  };
  return (
    <button className="button" onClick={handleLogout}>
      <img src="assets/icons/logout.png" width={18} height={18} />
    </button>
  );
}

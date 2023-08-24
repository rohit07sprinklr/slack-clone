//libs
import { useEffect, useState } from 'react';

//components
import Login from '../Login/Login';
import Homepage from '../Homepage/Homepage';
import { UserProvider } from '../UserProvider/UserProvider';
import { getStorage } from '../../utils/utils';
import Loader from '../Loader/Loader';
import ErrorPage from '../ErrorPage/ErrorPage';
import './mainpage.css';

//hooks
import { useQuery } from '../Hooks/useQuery';

//utils
import { getProfile } from '../../httpServices/httpService';

export default function Mainpage() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const { loading, data, error } = useQuery(getProfile, authenticated);

  useEffect(() => {
    if (getStorage('token')) {
      setAuthenticated(true);
    }
    return () => {
      setAuthenticated(false);
    };
  }, []);

  if (loading) {
    return (
      <div className="mainpage-loader-container">
        <Loader />
      </div>
    );
  } else if (error) {
    return <ErrorPage />;
  } else {
    return (
      <UserProvider user={data}>
        {authenticated ? <Homepage /> : <Login />}
      </UserProvider>
    );
  }
}

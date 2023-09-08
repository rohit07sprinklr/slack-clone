//libs
import { useEffect, useState } from 'react';

//components
import Login from '../login/Login';
import Homepage from '../homepage/Homepage';
import { UserProvider } from '../userProvider/UserProvider';
import Loader from '../loader/Loader';
import ErrorPage from '../errorPage/ErrorPage';

//css
import './mainpage.css';

//hooks
import { useQuery } from '../../hooks/useQuery';

//utils
import { getProfile } from '../../httpServices/httpService';
import { AUTH_KEY } from '../../utils/constants';
import { getStorage } from '../../utils/utils';

export default function Mainpage() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const { loading, data, error } = useQuery({
    queryFunction: getProfile,
    skip: !authenticated
  });

  useEffect(() => {
    if (getStorage(AUTH_KEY)) {
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
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <UserProvider user={data}>
      {authenticated ? <Homepage /> : <Login />}
    </UserProvider>
  );
}

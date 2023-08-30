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
import { useQuery } from '../../Hooks/useQuery';

//utils
import { getProfile } from '../../httpServices/httpService';
import { AUTH_KEY } from '../../utils/constants';

export default function Mainpage() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const { loading, data, error } = useQuery({
    queryFunction: getProfile,
    enabled: authenticated,
    refetchProps: [authenticated]
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

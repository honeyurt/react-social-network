import { useState, useContext, useEffect } from 'react';
import { AuthStoreContext } from '../stores/auth-store';

export const useAuth = () => {
  const [loaded, setLoaded] = useState(false);
  const { authData, getMe, getLogout } = useContext(AuthStoreContext);

  useEffect(() => {
    if (!loaded) {
      getMe().then((data) => {
        if (data) {
          setLoaded(true);
        }
      });
    }
  }, [loaded, getMe]);

  return {
    authData,
    getLogout,
    loaded,
  };
};

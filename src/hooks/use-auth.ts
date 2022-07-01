import { useState, useContext, useEffect } from 'react';
import { AuthStoreContext } from '../stores/auth-store';

export const useAuth = () => {
  const [loaded, setLoaded] = useState(false);
  const { authData, getMe } = useContext(AuthStoreContext);

  useEffect(() => {
    if (!loaded) {
      getMe();
      setLoaded(true);
    }
  }, [loaded, getMe]);

  return {
    authData,
    loaded,
  };
};

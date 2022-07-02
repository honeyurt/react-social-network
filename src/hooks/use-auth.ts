import { useState, useContext, useEffect } from 'react';
import { AuthStoreContext } from '../stores/auth-store';

export const useAuth = () => {
  const [loaded, setLoaded] = useState(false);
  const { authData, getMe, getLogin, getLogout, authErrorText, captchaImage } =
    useContext(AuthStoreContext);

  useEffect(() => {
    if (!loaded && !authData?.id) {
      getMe().then((data) => {
        if (data) {
          setLoaded(true);
        }
      });
    }
  }, [loaded, getMe, authData?.id]);

  return {
    authData,
    getLogin,
    getLogout,
    authErrorText,
    captchaImage,
    loaded,
  };
};

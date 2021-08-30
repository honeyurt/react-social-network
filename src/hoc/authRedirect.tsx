import React from 'react';

import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

const AuthRedirect = (Component: React.ComponentType) => {
  const ContainerComponent: React.FC = (props) => {
    const { isAuth } = useSelector((state: RootState) => state.auth);
    if (!isAuth) return <Redirect to="/login" />;

    return <Component {...props} />;
  };

  return ContainerComponent;
};

export default AuthRedirect;

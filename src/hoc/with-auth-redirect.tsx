import React, { ComponentType } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

export const withAuthRedirect = (WrappedComponent: ComponentType) => () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  if (!isAuth) return <Redirect to="/login" />;

  return <WrappedComponent />;
};

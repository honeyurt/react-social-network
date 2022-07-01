import React, { ComponentType } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

export const withAuthRedirect = (WrappedComponent: ComponentType) => () => {
  const { authData } = useAuth();

  if (!authData) return <Redirect to="/login" />;

  return <WrappedComponent />;
};

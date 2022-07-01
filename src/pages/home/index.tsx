import React from 'react';
import { observer } from 'mobx-react';
import { useAuth } from '../../hooks/use-auth';

// TODO: rebuild this page

export const Home = observer(() => {
  const { authData } = useAuth();
  console.log(authData);

  return (
    <h1>
      Welcome to the{' '}
      <span style={{ color: '#3498db' }}>
        React Social Network{`, ${authData?.login ?? 'stranger'}`}!
      </span>
    </h1>
  );
});

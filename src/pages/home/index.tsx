import React from 'react';
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';

// TODO: rebuild this page

export const Home = () => {
  const { login } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <h1>
        Welcome to the{' '}
        <span style={{ color: '#3498db' }}>
          React Social Network{`, ${login ? login : 'stranger'}`}!
        </span>
      </h1>
    </>
  );
};

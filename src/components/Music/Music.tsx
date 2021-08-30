import React from 'react';
import AuthRedirect from '../../hoc/authRedirect';

const Music = () => {
  return <h1>Music</h1>;
};

export default AuthRedirect(Music);

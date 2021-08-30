import React from 'react';
import AuthRedirect from '../../hoc/authRedirect';

const Messages = () => {
  return <h1>Messages</h1>;
};

export default AuthRedirect(Messages);

import React from 'react';
import AuthRedirect from '../../hoc/authRedirect';

const News = () => {
  return <h1>News</h1>;
};

export default AuthRedirect(News);

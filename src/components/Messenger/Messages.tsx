import React from 'react';
import AuthRedirect from '../../hoc/authRedirect';

import Layout from '../../UI/Layout/Layout';

const Messages = () => {
  return (
    <Layout>
      <h2>Messages</h2>
    </Layout>
  );
};

export default AuthRedirect(Messages);

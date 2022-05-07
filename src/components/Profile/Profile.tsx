import React from 'react';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';

import Layout from '../../UI/Layout/Layout';

const Profile = () => {
  return (
    <Layout>
      <h2>My Profile</h2>
      <ProfileInfo />
      <Posts />
    </Layout>
  );
};

export default withAuthRedirect(Profile);

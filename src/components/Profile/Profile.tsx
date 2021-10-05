import React from 'react';
import AuthRedirect from '../../hoc/authRedirect';
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

export default AuthRedirect(Profile);

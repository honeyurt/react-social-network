import React from 'react';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import { PageLayout } from '../page-layout';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';

const Profile = () => {
  return (
    <PageLayout title="Profile">
      <ProfileInfo />
      <Posts />
    </PageLayout>
  );
};

export default withAuthRedirect(Profile);

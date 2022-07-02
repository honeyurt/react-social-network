import React from 'react';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import { PageLayout } from '../../components/page-layout';
import { Profile } from './profile';

const ProfilePageView = () => {
  return (
    <PageLayout title="Profile">
      <Profile />
    </PageLayout>
  );
};

export const ProfilePage = withAuthRedirect(ProfilePageView);

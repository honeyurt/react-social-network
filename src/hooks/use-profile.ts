import { useContext } from 'react';
import { ProfileStoreContext } from '../stores/profile-store';

export const useProfile = () => {
  const { getProfile, getStatus, status, profile } = useContext(ProfileStoreContext);

  return {
    status,
    profile,
    getProfile,
    getStatus,
  };
};

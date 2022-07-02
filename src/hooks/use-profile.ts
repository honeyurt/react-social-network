import { useContext } from 'react';
import { ProfileStoreContext } from '../stores/profile-store';

export const useProfile = () => {
  const { getProfile, getStatus, status, profile, uploadPhoto, updateStatus, updateProfile } =
    useContext(ProfileStoreContext);

  return {
    status,
    profile,
    getProfile,
    getStatus,
    uploadPhoto,
    updateStatus,
    updateProfile,
  };
};

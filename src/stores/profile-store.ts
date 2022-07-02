import { action, observable, makeObservable, runInAction } from 'mobx';
import { createContext } from 'react';
import { apiProfile } from '../api/profile';
import {
  Profile,
  GetProfileResponse,
  GetStatusResponse,
  UploadPhotoResponse,
} from '../types/profile/';

class ProfileStore {
  constructor() {
    makeObservable(this, {
      profile: observable,
      status: observable,
      getProfile: action,
      getStatus: action,
      uploadPhoto: action,
      updateStatus: action,
      updateProfile: action,
    });
  }

  profile: Profile | null = null;
  status = '';

  getProfile = async (userId: string) => {
    let response: GetProfileResponse;

    try {
      response = await apiProfile.getProfile(userId);
    } finally {
      runInAction(() => {
        if (response) {
          const { data } = response;

          this.profile = data;
        }
      });
    }
  };

  getStatus = async (userId: string) => {
    let response: GetStatusResponse;

    try {
      response = await apiProfile.getStatus(userId);
    } finally {
      runInAction(() => {
        if (response) {
          const { data } = response;

          this.status = data;
        }
      });
    }
  };

  uploadPhoto = async (image: File) => {
    let response: UploadPhotoResponse;

    try {
      response = await apiProfile.uploadPhoto(image);
    } finally {
      runInAction(() => {
        if (response && this.profile) {
          const { data } = response;
          this.profile.photos = data.data.photos;
        }
      });
    }
  };

  updateStatus = (status: string) => apiProfile.updateSatus(status);

  updateProfile = (body: Profile) => apiProfile.updateProfile(body);
}

const context = createContext(new ProfileStore());

export { context as ProfileStoreContext };

import { action, observable, makeObservable, runInAction } from 'mobx';
import { createContext } from 'react';
import { apiProfile } from '../api/profile';
import { Profile, GetProfileResponse, GetStatusResponse } from '../types/profile/';

class ProfileStore {
  constructor() {
    makeObservable(this, {
      profile: observable,
      status: observable,
      getProfile: action,
      getStatus: action,
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
}

const context = createContext(new ProfileStore());

export { context as ProfileStoreContext };

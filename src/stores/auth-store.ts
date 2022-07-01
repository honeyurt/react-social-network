import { action, observable, makeObservable, runInAction } from 'mobx';
import { createContext } from 'react';
import { apiAuth } from '../api/auth';
import { Data } from '../types/auth/data';
import { GetMeResponse } from '../types/auth/get-me-response';

class AuthStore {
  constructor() {
    makeObservable(this, {
      authData: observable,
      getMe: action,
      getLogout: action,
    });
  }

  authData: Data | null = null;

  getMe = async () => {
    let response: GetMeResponse;

    try {
      response = await apiAuth.getMe();
    } finally {
      runInAction(() => {
        const {
          data: { data },
        } = response;
        this.authData = data;
      });
    }

    return response;
  };

  getLogout = async () => {
    await apiAuth.getLogout();

    runInAction(() => {
      this.authData = null;
    });
  };
}

const context = createContext(new AuthStore());

export { context as AuthStoreContext };

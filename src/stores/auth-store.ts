import { action, observable, makeObservable, runInAction } from 'mobx';
import { createContext } from 'react';
import { apiAuth } from '../api/auth';
import { Data } from '../types/auth/data';
import { AuthResponse, LoginResponse, LoginRequest, GetCaptchaResponse } from '../types/auth/';

class AuthStore {
  constructor() {
    makeObservable(this, {
      authData: observable,
      authErrorText: observable,
      captchaImage: observable,
      getMe: action,
      getLogin: action,
      getLogout: action,
    });
  }

  authData: Data | null = null;
  authErrorText = '';
  captchaImage = '';

  getMe = async () => {
    let response: AuthResponse;

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

  getCaptcha = async () => {
    let response: GetCaptchaResponse;

    try {
      response = await apiAuth.getCaptcha();
    } finally {
      runInAction(() => {
        this.captchaImage = response.data.url;
      });
    }
  };

  getLogin = async (body: LoginRequest) => {
    let response = {} as LoginResponse;

    try {
      response = await apiAuth.getLogin(body);
    } finally {
      const {
        data: { resultCode, messages },
      } = response;

      switch (resultCode) {
        case 0: {
          return this.getMe();
        }
        case 1: {
          runInAction(() => {
            this.authErrorText = messages[0];
          });
          break;
        }
        case 10: {
          runInAction(() => {
            this.authErrorText = messages[0];
          });

          return this.getCaptcha();
        }
      }
    }
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

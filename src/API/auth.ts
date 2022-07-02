import { instance } from './api';
import { AuthResponse, LoginRequest, LoginResponse, GetCaptchaResponse } from '../types/auth/';

interface IApiAuth {
  getMe(): Promise<AuthResponse>;
  getLogin(body: LoginRequest): Promise<LoginResponse>;
  getLogout(): Promise<void>;
  getCaptcha(): Promise<GetCaptchaResponse>;
}

class ApiAuth implements IApiAuth {
  getMe(): Promise<AuthResponse> {
    return instance.get('/auth/me');
  }

  getLogin(body: LoginRequest): Promise<LoginResponse> {
    return instance.post('/auth/login', body);
  }

  getLogout(): Promise<void> {
    return instance.delete('/auth/login');
  }

  getCaptcha(): Promise<GetCaptchaResponse> {
    return instance.get('/security/get-captcha-url');
  }
}

const apiAuth = new ApiAuth();

export { apiAuth };

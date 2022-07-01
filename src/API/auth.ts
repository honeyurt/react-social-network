import { instance } from './api';
import { GetMeResponse } from '../types/auth/get-me-response';

interface IApiAuth {
  getMe(): Promise<GetMeResponse>;
  getLogout(): Promise<void>;
}

class ApiAuth implements IApiAuth {
  getMe(): Promise<GetMeResponse> {
    return instance.get('/auth/me');
  }

  getLogout(): Promise<void> {
    return instance.delete('/auth/login');
  }
}

const apiAuth = new ApiAuth();

export { apiAuth };

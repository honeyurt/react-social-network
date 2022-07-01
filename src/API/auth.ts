import { instance } from './api';
import { GetMeResponse } from '../types/auth/get-me-response';

interface IApiAuth {
  getMe(): Promise<GetMeResponse>;
}

class ApiAuth implements IApiAuth {
  getMe(): Promise<GetMeResponse> {
    return instance.get('/auth/me');
  }
}

const apiAuth = new ApiAuth();

export { apiAuth };

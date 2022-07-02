import { instance } from './api';
import { GetProfileResponse, GetStatusResponse } from '../types/profile/';

interface IApiProfile {
  getProfile(userId: string): Promise<GetProfileResponse>;
  getStatus(userId: string): Promise<GetStatusResponse>;
}

class ApiProfile implements IApiProfile {
  getProfile(userId: string): Promise<GetProfileResponse> {
    return instance.get(`/profile/${userId}`);
  }

  getStatus(userId: string): Promise<GetStatusResponse> {
    return instance.get(`/profile/status/${userId}`);
  }
}

const apiProfile = new ApiProfile();

export { apiProfile };

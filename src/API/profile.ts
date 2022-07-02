import { instance } from './api';
import { GetProfileResponse, GetStatusResponse, UploadPhotoResponse } from '../types/profile/';
import { Profile } from '../types/profile/';

interface IApiProfile {
  getProfile(userId: string): Promise<GetProfileResponse>;
  getStatus(userId: string): Promise<GetStatusResponse>;
  uploadPhoto(image: File): Promise<UploadPhotoResponse>;
  updateSatus(status: string): Promise<void>;
  updateProfile(body: Profile): Promise<void>;
}

class ApiProfile implements IApiProfile {
  getProfile(userId: string): Promise<GetProfileResponse> {
    return instance.get(`/profile/${userId}`);
  }

  getStatus(userId: string): Promise<GetStatusResponse> {
    return instance.get(`/profile/status/${userId}`);
  }

  uploadPhoto(image: File): Promise<UploadPhotoResponse> {
    const formData = new FormData();
    formData.append('image', image);

    return instance.put('/profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  updateSatus(status: string): Promise<void> {
    return instance.put('profile/status', { status });
  }

  updateProfile(body: Profile): Promise<void> {
    return instance.put('/profile', body);
  }
}

const apiProfile = new ApiProfile();

export { apiProfile };

import { ProfilePhoto } from './profile-photo';

export type UploadPhotoResponse = {
  data: {
    data: {
      photos: ProfilePhoto;
    };
  };
};

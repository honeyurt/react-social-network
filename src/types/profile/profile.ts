import { ProfileContacts } from './profile-contacts';
import { ProfilePhoto } from './profile-photo';

export type Profile = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  aboutMe: string;
  contacts: ProfileContacts;
  photos: ProfilePhoto;
};

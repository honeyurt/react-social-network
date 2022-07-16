import { ProfilePhoto } from '../profile/profile-photo';

export type UserObject = {
  id: number;
  name: string;
  status: string;
  photos: ProfilePhoto;
  followed: boolean;
};

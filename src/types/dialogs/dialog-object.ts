import { ProfilePhoto } from '../profile/profile-photo';

export type DialogObject = {
  id: number;
  userName: string;
  hasNewMessages: boolean;
  lastDialogActivityDate: Date;
  lastUserActivityDate: Date;
  newMessagesCount: number;
  photos: ProfilePhoto;
};

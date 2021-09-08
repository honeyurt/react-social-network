export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  aboutMe: string;
  contacts: ProfileContactsType;
  photos: ProfilePhotosType;
};

type ProfileContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type ProfilePhotosType = {
  small: string | null;
  large: string | null;
};

export interface ProfileState {
  posts: any[];
  profile: ProfileType | null;
  status: string;
}

export enum ProfileActionTypes {
  SET_USER_PROFILE = 'SET_USER_PROFILE',
  SET_STATUS = 'SET_STATUS',
  SAVE_PHOTO = 'SAVE_PHOTO',
}

interface SetUserProfile {
  type: ProfileActionTypes.SET_USER_PROFILE;
  profile: null;
}

interface SetUserStatus {
  type: ProfileActionTypes.SET_STATUS;
  status: string;
}

interface SavePhoto {
  type: ProfileActionTypes.SAVE_PHOTO;
  photos: ProfilePhotosType;
}

export type ProfileAction = SetUserProfile | SetUserStatus | SavePhoto;

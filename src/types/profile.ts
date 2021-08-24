type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
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

type ProfilePhotosType = {
  small: string;
  large: string;
};

export interface ProfileState {
  posts: any[];
  profile: ProfileType | null;
  status: string;
}

export enum ProfileActionTypes {
  SET_USER_PROFILE = 'SET_USER_PROFILE',
  SET_STATUS = 'SET_STATUS',
}

interface SetUserProfile {
  type: ProfileActionTypes.SET_USER_PROFILE;
  profile: null;
}

interface SetUserStatus {
  type: ProfileActionTypes.SET_STATUS;
  status: string;
}

export type ProfileAction = SetUserProfile | SetUserStatus;

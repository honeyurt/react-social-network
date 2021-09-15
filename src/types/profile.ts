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

type ProfilePosts = {
  id: number;
  text?: string;
};

export interface ProfileState {
  posts: Array<ProfilePosts>;
  profile: ProfileType | null;
  status: string;
}

export enum ProfileActionTypes {
  SET_USER_PROFILE = 'SET_USER_PROFILE',
  SET_STATUS = 'SET_STATUS',
  SAVE_PHOTO = 'SAVE_PHOTO',
  ADD_POST = 'ADD_POST',
  DELETE_POST = 'DELETE_POST',
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

interface AddPost {
  type: ProfileActionTypes.ADD_POST;
  posts: ProfilePosts;
}

interface DeletePost {
  type: ProfileActionTypes.DELETE_POST;
  posts: ProfilePosts;
}

export type ProfileAction = SetUserProfile | SetUserStatus | SavePhoto | AddPost | DeletePost;

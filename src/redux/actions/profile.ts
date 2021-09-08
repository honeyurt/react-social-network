import { Dispatch } from 'redux';
import { instance } from '../../API/api';
import { ProfileAction, ProfileActionTypes, ProfileType } from '../../types/profile';

export const getUserProfile = (userId: string) => async (dispatch: Dispatch<ProfileAction>) => {
  try {
    const response = await instance.get(`profile/${userId}`);
    dispatch({
      type: ProfileActionTypes.SET_USER_PROFILE,
      profile: response.data,
    });
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};

export const getUserStatus = (userId: string) => async (dispatch: Dispatch<ProfileAction>) => {
  try {
    const response = await instance.get(`profile/status/${userId}`);
    dispatch({
      type: ProfileActionTypes.SET_STATUS,
      status: response.data,
    });
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};

export const updateProfile = (profile: ProfileType) => async () => {
  try {
    await instance.put('profile', profile);
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};

export const updateStatus = (status: string) => async (dispatch: Dispatch<ProfileAction>) => {
  try {
    const response = await instance.put('profile/status', { status });
    dispatch({
      type: ProfileActionTypes.SET_STATUS,
      status: response.data,
    });
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};

export const uploadPhoto = (file: File) => async (dispatch: Dispatch<ProfileAction>) => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data.resultCode === 0)
      dispatch({
        type: ProfileActionTypes.SAVE_PHOTO,
        photos: response.data.data.photos,
      });
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};

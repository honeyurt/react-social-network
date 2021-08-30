import { Dispatch } from 'redux';
import { instance } from '../../API/api';
import { ProfileAction, ProfileActionTypes } from '../../types/profile';

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

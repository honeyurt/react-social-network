import { ProfileState, ProfileActionTypes, ProfileAction, ProfileType } from '../../types/profile';

const initialState: ProfileState = {
  posts: [],
  profile: null,
  status: '',
};

export const profileReducer = (state = initialState, action: ProfileAction): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case ProfileActionTypes.SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case ProfileActionTypes.SAVE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    default:
      return state;
  }
};

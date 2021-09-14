import { VideoAction, VideoActionTypes, VideoState } from '../../types/video';

const initialState: VideoState = {
  items: null,
};

export const videoReducer = (state = initialState, action: VideoAction): VideoState => {
  switch (action.type) {
    case VideoActionTypes.FIND_VIDEO:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

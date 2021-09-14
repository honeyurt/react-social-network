import axios from 'axios';
import { Dispatch } from 'redux';
import { VideoAction, VideoActionTypes } from '../../types/video';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';

export const execute =
  (searchText: string, maxResults: number) => async (dispatch: Dispatch<VideoAction>) => {
    try {
      const response = await axios.get(
        `${API_URL}?key=${process.env.REACT_APP_YOTUBE_API_KEY}&part=snippet&q=${searchText}&maxResults=${maxResults}&type=video`,
      );

      dispatch({
        type: VideoActionTypes.FIND_VIDEO,
        payload: response.data.items,
      });
    } catch (error: unknown) {
      if (error instanceof Error) console.log(error.message);
    }
  };

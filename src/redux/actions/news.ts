import axios from 'axios';
import { Dispatch } from 'redux';
import { NewsAction, NewsActionTypes } from '../../types/news';

const API_URL = 'https://newsapi.org/v2/top-headlines?';

export const execute = (category: string) => async (dispatch: Dispatch<NewsAction>) => {
  try {
    const response = await axios.get(
      `${API_URL}country=us&category=${category}&apiKey=${process.env.REACT_APP_NEWS_ALI_KEY}`,
    );

    dispatch({
      type: NewsActionTypes.FIND_NEWS,
      payload: response.data.articles,
    });
  } catch (error: any) {
    dispatch({
      type: NewsActionTypes.ERROR,
      message: error.response.data.message,
    });
  }
};

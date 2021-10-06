import { NewsAction, NewsActionTypes, NewsState } from '../../types/news';

const initialState: NewsState = {
  items: null,
  message: '',
};

export const newsReducers = (state = initialState, action: NewsAction): NewsState => {
  switch (action.type) {
    case NewsActionTypes.FIND_NEWS:
      return {
        ...state,
        items: action.payload,
      };
    case NewsActionTypes.ERROR:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

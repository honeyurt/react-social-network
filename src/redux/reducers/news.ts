import { NewsAction, NewsActionTypes, NewsState } from '../../types/news';

const initialState: NewsState = {
  items: null,
};

export const newsReducers = (state = initialState, action: NewsAction): NewsState => {
  switch (action.type) {
    case NewsActionTypes.FIND_NEWS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

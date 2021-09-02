import { InitState, InitAction, InitActionTypes } from '../../types/init';

const initialState: InitState = {
  initialized: false,
};

export const initReducer = (state = initialState, action: InitAction): InitState => {
  switch (action.type) {
    case InitActionTypes.INIT:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

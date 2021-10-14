import { DialogsState, DialogsAction, DialogsActionTypes } from '../../types/dialogs';

const initialState: DialogsState = {
  dialogs: [],
  dialogList: null,
  newMessagesCount: 0,
  isLoaded: false,
};

export const dialogsReducer = (state = initialState, action: DialogsAction): DialogsState => {
  switch (action.type) {
    case DialogsActionTypes.GET_DIALOGS:
      return {
        ...state,
        dialogs: action.dialogs,
      };
    case DialogsActionTypes.GET_DIALOG_LIST:
      return {
        ...state,
        dialogList: [action.items],
      };
    case DialogsActionTypes.SEND_MESSAGE:
      return {
        ...state,
      };
    case DialogsActionTypes.GET_NEW_MESSAGES_COUNT:
      return {
        ...state,
        newMessagesCount: action.count,
      };
    case DialogsActionTypes.UPDATE_MESSAGES_COUNTER:
      return {
        ...state,
        newMessagesCount: action.counter,
      };
    case DialogsActionTypes.IS_LOADED:
      return {
        ...state,
        isLoaded: true,
      };
    default:
      return state;
  }
};

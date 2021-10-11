import { DialogsState, DialogsAction, DialogsActionTypes } from '../../types/dialogs';

const initialState: DialogsState = {
  friends: [],
  dialogs: [],
  dialogList: null,
  newMessagesCount: 0,
};

export const dialogsReducer = (state = initialState, action: DialogsAction): DialogsState => {
  switch (action.type) {
    case DialogsActionTypes.GET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };
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
    default:
      return state;
  }
};

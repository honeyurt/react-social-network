import { Dispatch } from 'redux';
import { instance } from '../../API/api';
import { DialogsAction, DialogsActionTypes } from '../../types/dialogs';

export const getFriends = () => async (dispatch: Dispatch<DialogsAction>) => {
  const response = await instance.get('users?friend=true');
  dispatch({
    type: DialogsActionTypes.GET_FRIENDS,
    friends: response.data.items,
  });
};

export const getDialgos = () => async (dispatch: Dispatch<DialogsAction>) => {
  try {
    const response = await instance.get('dialogs');
    dispatch({
      type: DialogsActionTypes.GET_DIALOGS,
      dialogs: response.data,
    });
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};

export const getDialgosList = (userID: number) => async (dispatch: Dispatch<DialogsAction>) => {
  try {
    const response = await instance.get(`dialogs/${userID}/messages`);
    dispatch({
      type: DialogsActionTypes.GET_DIALOG_LIST,
      items: response.data,
    });
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};

export const sendMessage =
  (userID: number, body: string) => async (dispatch: Dispatch<DialogsAction | any>) => {
    try {
      await instance.post(`dialogs/${userID}/messages`, { body });
      dispatch({
        type: DialogsActionTypes.SEND_MESSAGE,
      });

      dispatch(getDialgosList(userID));
    } catch (error: unknown) {
      if (error instanceof Error) console.log(error.message);
    }
  };

export const getNewMessagesCount = () => async (dispatch: Dispatch<DialogsAction>) => {
  try {
    const response = await instance.get('dialogs/messages/new/count');
    dispatch({
      type: DialogsActionTypes.GET_NEW_MESSAGES_COUNT,
      count: response.data,
    });
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};

import { Dispatch } from 'redux';
import { instance } from '../../api/api';
import { DialogsAction, DialogsActionTypes } from '../../types/dialogs';

export const getDialgos = () => async (dispatch: Dispatch<DialogsAction>) => {
  try {
    const response = await instance.get('dialogs');

    if (response.status === 200) {
      dispatch({
        type: DialogsActionTypes.GET_DIALOGS,
        dialogs: response.data,
      });

      dispatch({
        type: DialogsActionTypes.IS_LOADED,
      });
    }
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

export const deleteMessage = (messageId: string) => async (dispatch: Dispatch<DialogsAction>) => {
  try {
    const resposne = await instance.delete(`dialogs/messages/${messageId}`);

    if (resposne.status === 200)
      dispatch({
        type: DialogsActionTypes.DELETE_MESSAGE,
        messageId,
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

export const startMessaging = (userId: string) => async () => {
  try {
    const response = await instance.put(`dialogs/${userId}`);

    if (response.status === 200) alert('Please return to the dialogs.');
  } catch (error: unknown) {
    alert('Please enter a correct ID!');
  }
};

export const updateMessagesCount = (counter: number) => ({
  type: DialogsActionTypes.UPDATE_MESSAGES_COUNTER,
  counter,
});

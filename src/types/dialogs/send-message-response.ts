import { DialogWithUserObject } from './dialog-with-user-object';

export type SendMessageResponse = {
  data: {
    data: {
      message: DialogWithUserObject;
    };
  };
};

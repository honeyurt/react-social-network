import { DialogWithUserObject } from './dialog-with-user-object';

export type DialogWithUserResponse = {
  data: {
    items: DialogWithUserObject[];
    totalCount: number;
    error?: string;
  };
};

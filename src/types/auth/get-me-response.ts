import { Data } from './data';

export type GetMeResponse = {
  data: {
    data: Data;
  };
  messages: string[];
  resultCode: number;
};

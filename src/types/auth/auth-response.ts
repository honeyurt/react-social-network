import { Data } from './data';

export type AuthResponse = {
  data: {
    data: Data;
  };
  messages: string[];
  resultCode: number;
};

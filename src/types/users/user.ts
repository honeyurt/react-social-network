import { UserObject } from './user-object';

export type User = {
  items: UserObject[];
  totalCount: number;
  error?: string;
};

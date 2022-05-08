import { Articles } from './articles';

export type Data = {
  articles: Articles[];
  status: string;
  totalResults: number;
  errorMessage?: string;
};

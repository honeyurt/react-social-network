import * as yup from 'yup';

export interface IFormInputs {
  name: string;
  type: string;
}

export const SearchUsersSchema = yup.object().shape({
  name: yup.string().notRequired(),
  type: yup.string().notRequired(),
});

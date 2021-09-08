import * as yup from 'yup';

export interface IFormInputs {
  text: string;
}

export const PostSchema = yup.object().shape({
  text: yup.string().min(1),
});

import * as yup from 'yup';

export interface IFormInputs {
  message: string;
}

export const DialogSchema = yup.object().shape({
  message: yup.string().min(1).required(),
});

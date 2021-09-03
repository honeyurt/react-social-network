import * as yup from 'yup';

export interface IFormInputs {
  email: string;
  password: string;
  checkbox: boolean;
}

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email!').required('Email is a required field!'),
  password: yup.string().min(1, 'Please enter a valid password!').required(),
  checkbox: yup.bool().notRequired(),
});

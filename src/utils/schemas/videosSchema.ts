import * as yup from 'yup';

export interface IFormInputs {
  text: string;
}

export const VideosSchema = yup.object().shape({
  text: yup.string().min(1, 'Please enter a valid search text').required(),
});

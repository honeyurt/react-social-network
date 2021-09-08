import * as yup from 'yup';

export interface IFormInputs {
  nickname: string;
  status: string;
  checkbox: boolean;
  aboutMe: string;
  description: string;
  facebook: string;
  twitter: string;
  instagram: string;
  github: string;
}

export const SettingsSchema = yup.object().shape({
  nickname: yup.string().notRequired(),
  status: yup.string().max(300, 'Maximum length is 300 sybmols.').notRequired(),
  checkbox: yup.bool().notRequired(),
  aboutMe: yup.string().notRequired(),
  description: yup.string().notRequired(),
  facebook: yup.string().notRequired(),
  twitter: yup.string().notRequired(),
  instagram: yup.string().notRequired(),
  github: yup.string().notRequired(),
});

export type LoginRequest = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
};

import React from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/actions/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, IFormInputs } from '../../utils/schemas/loginSchema';
import { useHistory } from 'react-router';

import Button from '../../UI/Button/Button';
import styles from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formVisible, setFormVisible] = React.useState<boolean>(false);

  const form = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = (data: IFormInputs) => {
    dispatch(setLogin(data.email, data.password, data.checkbox));
    history.push('/');
  };

  const formHandler = () => {
    setFormVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.about}>
        <p>
          Welcome to the React Social Network. <br />
          It's a 'pet' project where im learning how to use <span>TypeScript</span> with{' '}
          <span>React</span>.
        </p>
        <p>
          If u don't want register for trying this social network, u can use test account. <br />
          <span>
            <b>Login:</b> <em>free@samuraijs.com</em> <br />
            <b>Password:</b> <em>free</em>
          </span>
        </p>
      </div>
      <div className={styles.buttons}>
        <Button onClick={formHandler}>Sign In</Button>
        <a href="https://social-network.samuraijs.com/signUp">
          <Button>Sing Up</Button>
        </a>
      </div>
      {formVisible && (
        <div className={styles.form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <label htmlFor="ail">Email</label>
            <input {...form.register('email')} type="text" id="email" />
            <p>{form.formState.errors.email?.message}</p>

            <label htmlFor="password">Password</label>
            <input {...form.register('password')} type="password" id="password" />
            <p>{form.formState.errors.password?.message}</p>

            <div className={styles.form__bottom}>
              <div className={styles.form__left}>
                <label htmlFor="rememberMe">Remember me</label>
                <input {...form.register('checkbox')} type="checkbox" id="rememberMe" />
              </div>
              <div className={styles.form__right}>
                <Button type="submit">Sing In</Button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;

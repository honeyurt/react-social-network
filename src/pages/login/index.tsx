import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { Button } from '../../components/button/index';
import { isEmail } from '../../utils/is-email';
import { useAuth } from '../../hooks/use-auth';
import styles from './styles.module.css';

export const LoginPage = observer(() => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [login, setLogin] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [captcha, setcaptch] = useState('');
  const { getLogin, authData, authErrorText, captchaImage } = useAuth();

  const handleLogin = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    const isValidEmail = isEmail(login);

    if (isValidEmail) {
      setIsValid(true);
      getLogin({ email: login, password, rememberMe, captcha });
    } else {
      setIsValid(false);
    }
  };

  if (authData?.id) return <Redirect to="/" />;

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
          <span className={styles.testAccount}>
            <b>Login:</b> <em>free@samuraijs.com</em> <br />
            <b>Password:</b> <em>free</em>
          </span>
        </p>
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => setIsFormVisible((prev) => !prev)}>Sign In</Button>
        <a href="https://social-network.samuraijs.com/signUp">
          <Button>Sign Up</Button>
        </a>
      </div>
      {isFormVisible && (
        <div className={styles.form}>
          <form>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setLogin(e.target.value.toString())}
              type="text"
              id="email"
              placeholder="elon@musk.com"
            />

            {!isValid && <p>Please enter a valid email!</p>}

            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value.toString())}
              type="password"
              id="password"
              placeholder="********"
            />

            {authErrorText && <p className={styles.error_message}>{authErrorText}</p>}

            <div className={styles.form__bottom}>
              <div className={styles.form__left}>
                <label htmlFor="rememberMe">Remember me</label>
                <input
                  checked={rememberMe}
                  onChange={() => setRememberMe((prev) => !prev)}
                  type="checkbox"
                  id="rememberMe"
                />
              </div>
              <div className={styles.form__right} onClick={(e) => handleLogin(e)}>
                <Button type="submit">Sign In</Button>
              </div>
            </div>

            {captchaImage && (
              <div className={styles.form__captcha}>
                <img src={captchaImage} alt="Captcha" />
                <input
                  onChange={(e) => setcaptch(e.target.value)}
                  type="text"
                  placeholder="captcha"
                />
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
});

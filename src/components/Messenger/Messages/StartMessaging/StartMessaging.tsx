import React from 'react';
import { useDispatch } from 'react-redux';
import { startMessaging } from '../../../../redux/actions/dialogs';

import Button from '../../../../UI/Button/Button';
import styles from './StartMessaging.module.css';

const StartMessaging = () => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState('');

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const onStartMessaging = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (Number(id) > 0) dispatch(startMessaging(id));
    else alert('ID must be a positive number and greater than 0!');
  };

  return (
    <div className={styles.start}>
      <h1>Start a dialogue!</h1>
      <form>
        <label htmlFor="id">ID</label>
        <input type="number" placeholder="id" id="id" value={id} onChange={onChangeInput} />
        <Button onClick={onStartMessaging} disabled={id.length === 0}>
          Start
        </Button>
      </form>
    </div>
  );
};

export default StartMessaging;

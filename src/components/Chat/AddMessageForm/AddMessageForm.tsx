import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { sendMessage } from '../../../redux/actions/chat';

import Button from '../../../UI/Button/Button';
import styles from './AddMessageForm.module.css';

const AddMessageForm = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.chat);
  const [message, setMessage] = React.useState('');

  const onChangeInputText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const sendMessageHandler = () => {
    if (message.trim().length === 0) {
      return;
    } else {
      dispatch(sendMessage(message));
      setMessage('');
    }
  };

  return (
    <div className={styles.form}>
      <textarea value={message} onChange={onChangeInputText} />
      <Button onClick={sendMessageHandler} disabled={status !== 'ready'}>
        Send
      </Button>
    </div>
  );
};

export default AddMessageForm;

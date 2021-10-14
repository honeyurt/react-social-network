import React from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../../../redux/actions/dialogs';

import { useForm } from 'react-hook-form';
import { IFormInputs, DialogSchema } from '../../../../utils/schemas/dialogsSchema';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';

import Button from '../../../../UI/Button/Button';
import styles from './MessageForm.module.css';

interface Props {
  userId: number;
}

const MessageForm: React.FC<Props> = ({ userId }) => {
  const dispatch = useDispatch();

  const form = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(DialogSchema),
  });

  const onSubmit = (data: IFormInputs) => {
    dispatch(sendMessage(userId, data.message));

    form.reset();
  };

  return (
    <>
      {!userId ? (
        <p>Click on your friend to start chatting!</p>
      ) : (
        <div className={styles.messages__form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <input type="text" placeholder="Write a message" {...form.register('message')} />
            <Button type="submit">Send</Button>
          </form>
        </div>
      )}
    </>
  );
};

export default MessageForm;

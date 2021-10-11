import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/reducers';
import { getFriends, getDialgos, getDialgosList, sendMessage } from '../../redux/actions/dialogs';
import { useForm } from 'react-hook-form';
import { IFormInputs, DialogSchema } from '../../utils/schemas/dialogsSchema';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import AuthRedirect from '../../hoc/authRedirect';

import Layout from '../../UI/Layout/Layout';
import Button from '../../UI/Button/Button';
import styles from './Dialogs.module.css';

import userProfilePagePhoto from '../../assets/img/userProfilePagePhoto.jpg';

/*
  TODO:
  [] - Refactoring 
  [] - Implement message deleting 
  [] - Implement restore the messages from bin
  [] - Pagination for friends / messages
*/

const Dialogs = () => {
  const dispatch = useDispatch();
  const { friends, dialogList } = useSelector((state: RootState) => state.dialogs);
  const { userId } = useParams<{ userId: string }>();
  const currentID = Number(userId);

  const friendClickHandler = (userID: number) => {
    dispatch(getDialgosList(userID));
  };

  const form = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(DialogSchema),
  });

  const onSubmit = (data: IFormInputs) => {
    dispatch(sendMessage(currentID, data.message));

    form.reset();
  };

  React.useEffect(() => {
    dispatch(getFriends());
    dispatch(getDialgos());

    if (currentID) dispatch(getDialgosList(currentID));
  }, [dispatch, currentID]);

  return (
    <Layout>
      <h2>Dialogs</h2>
      {friends.length === 0 ? (
        <p className={styles.noFriends}>You have no friends &#128532;</p>
      ) : (
        <div className={styles.dialogs}>
          <div className={styles.dialogs__friends}>
            {friends.map((friend) => (
              <div className={styles.friends__item} key={friend.id}>
                <NavLink
                  to={`/dialogs/${friend.id}/messages`}
                  activeClassName={styles.item__active}
                  onClick={friendClickHandler.bind(null, friend.id)}>
                  <img src={friend.photos.small || userProfilePagePhoto} alt="hoto" />
                  <p>{friend.name}</p>
                </NavLink>
              </div>
            ))}
          </div>
          <div className={styles.dialogs__messages}>
            {dialogList &&
              dialogList.map((item) =>
                item.items.map((message) => (
                  <div key={message.id} className={styles.messages__item}>
                    <p className={styles.item__sender}>{message.senderName}:</p>
                    <p className={styles.item__message}>{message.body}</p>
                    <p className={styles.item__date}>
                      {new Date(message.addedAt).toLocaleDateString()}
                    </p>
                    <nav className={message.viewed ? '' : styles.item__notViewed}></nav>
                  </div>
                )),
              )}
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
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AuthRedirect(Dialogs);

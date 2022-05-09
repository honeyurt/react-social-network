import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { RootState } from '../../redux/reducers';
import { getDialgos, getDialgosList, updateMessagesCount } from '../../redux/actions/dialogs';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import { PageLayout } from '../page-layout';
import Messages from './Messages/Messages';
import MessageForm from './Messages/MessageForm/MessageForm';
import DialogItem from './DialogItems/DialogItem';
import styles from './Dialogs.module.css';

const Dialogs = () => {
  const dispatch = useDispatch();
  const { dialogList, dialogs, isLoaded } = useSelector((state: RootState) => state.dialogs);
  const history = useHistory();
  const { userId } = useParams<{ userId: string }>();
  const currentID = Number(userId);

  const onDialogClickHandler = (userID: number) => {
    dispatch(getDialgosList(userID));
  };

  const onNewDialogHandler = () => {
    history.push('/dialog-create');
  };

  React.useEffect(() => {
    dispatch(getDialgos());

    if (currentID) dispatch(getDialgosList(currentID));
  }, [dispatch, currentID]);

  React.useEffect(() => {
    let counter = 0;

    dialogs.forEach((item) => {
      if (item.newMessagesCount > 0) counter += 1;
      return counter;
    });

    dispatch(updateMessagesCount(counter));
  }, [dispatch, dialogs]);

  if (!isLoaded) return <p>Loading..</p>;

  return (
    <PageLayout title="Dialogs">
      {dialogs.length === 0 ? (
        <Redirect to="/dialog-create" />
      ) : (
        <div className={styles.dialogs__wrapper}>
          <div className={styles.dialogs__items}>
            <div className={styles.dialogs__buttons}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  onClick={onNewDialogHandler}>
                  <path
                    d="M11.99 0l-11.99 8.723v15.277h24v-15.277l-12.01-8.723zm.001 2.472l9.793 7.113-6.735 4.588-3.049-2.47-3.049 2.471-6.737-4.589 9.777-7.113zm-9.991 9.386l5.329 3.63-5.329 4.318v-7.948zm.474 10.142l9.526-7.723 9.526 7.723h-19.052zm19.526-2.194l-5.329-4.317 5.329-3.631v7.948z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {dialogs.map((dialog) => (
              <DialogItem
                key={dialog.id}
                id={dialog.id}
                photo={dialog.photos.small || null}
                hasNewMessages={dialog.hasNewMessages}
                userName={dialog.userName}
                onClick={onDialogClickHandler}
              />
            ))}
          </div>

          <div className={styles.dialogs__messages}>
            {currentID
              ? dialogList.items.map((message) => (
                  <Messages
                    key={message.id}
                    senderName={message.senderName}
                    body={message.body}
                    addedAt={message.addedAt}
                    isViewed={message.viewed}
                    id={message.id}
                  />
                ))
              : ''}

            <MessageForm userId={currentID} />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default withAuthRedirect(Dialogs);

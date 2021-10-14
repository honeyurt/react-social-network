import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/reducers';
import { getDialgos, getDialgosList, updateMessagesCount } from '../../redux/actions/dialogs';
import AuthRedirect from '../../hoc/authRedirect';

import Messages from './Messages/Messages';
import MessageForm from './Messages/MessageForm/MessageForm';
import StartMessaging from './Messages/StartMessaging/StartMessaging';
import DialogItem from './DialogItems/DialogItem';
import Layout from '../../UI/Layout/Layout';
import styles from './Dialogs.module.css';

/*
  TODO:
  [x] - Refactoring 
  [] - Implement message deleting 
  [] - Implement restore the messages from bin
  [] - Pagination for friends / messages
  [x] - Counter doesn't work
  [x] - Fix when you leave dialog and return - form doesn't work
  [x] - Mark human which waiting answer from you
  [x] - Check styles ????
*/

const Dialogs = () => {
  const dispatch = useDispatch();
  const { dialogList, dialogs, isLoaded } = useSelector((state: RootState) => state.dialogs);
  const { userId } = useParams<{ userId: string }>();
  const currentID = Number(userId);

  const onDialogClickHandler = (userID: number) => {
    dispatch(getDialgosList(userID));
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
    <Layout>
      <h2>Dialogs</h2>
      {dialogs.length === 0 ? (
        <StartMessaging />
      ) : (
        <div className={styles.dialogs}>
          <div className={styles.dialogs__items}>
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
              ? dialogList?.map((item) =>
                  item.items.map((message) => (
                    <Messages
                      key={message.id}
                      senderName={message.senderName}
                      body={message.body}
                      addedAt={message.addedAt}
                      isViewed={message.viewed}
                    />
                  )),
                )
              : ''}

            <MessageForm userId={currentID} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AuthRedirect(Dialogs);

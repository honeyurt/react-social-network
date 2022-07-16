import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { PageLayout } from '../../components/page-layout';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import { useDialogs } from '../../hooks/use-dialogs';
import { CreateDialogIcon } from './icons/create-dialog-icon';
import { CREATE_DIALOG } from '../routes';
import { DialogItem } from '../../components/dialog-item';
import { Messages } from '../../components/messages';
import { Circles } from 'react-loader-spinner';
import styles from './styles.module.css';

type DialogsPageViewParams = {
  userId: string;
};

const DialogsPageView = observer(() => {
  const [loading, setLoading] = useState(true);
  const { dialogs, getDialogs } = useDialogs();
  const { userId } = useParams<DialogsPageViewParams>();
  const history = useHistory();

  useEffect(() => {
    getDialogs().finally(() => setLoading(false));
  }, [getDialogs]);

  if (loading) {
    return <Circles wrapperClass={styles.loader} color="#3498db" width={60} height={60} />;
  }

  if (userId) {
    return (
      <PageLayout title="Dialogs">
        <Messages userId={userId} />
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Dialogs">
      <div className={styles.dialogIcon} onClick={() => history.push(CREATE_DIALOG)}>
        <CreateDialogIcon />
        <div className={styles.createDialog}>Start messaging!</div>
      </div>

      <div className={styles.dialogsWrapper}>
        {dialogs.map((dialog) => (
          <DialogItem key={dialog.id} dialog={dialog} />
        ))}
      </div>

      {!Boolean(dialogs.length) && <Redirect to={CREATE_DIALOG} />}
    </PageLayout>
  );
});

export const DialogsPage = withAuthRedirect(DialogsPageView);

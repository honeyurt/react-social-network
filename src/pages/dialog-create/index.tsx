import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDialogs } from '../../hooks/use-dialogs';
import { Button } from '../../components/button';
import { DIALOGS_ROUTE } from '../routes';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import styles from './styles.module.css';

const DialogCreatePageView = () => {
  const [id, setId] = useState(0);
  const { startMessaging } = useDialogs();
  const history = useHistory();

  const handleStartMessaging = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (id && id > 0) {
      startMessaging(id).finally(() => history.push(`${DIALOGS_ROUTE}/${id}/messages`));
    }
  };

  return (
    <div className={styles.start}>
      <h1>Start a dialogue!</h1>
      <form>
        <label htmlFor="id">ID</label>
        <input
          type="number"
          placeholder="id"
          id="id"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
        />
        <Button onClick={(e) => handleStartMessaging(e)} disabled={!Boolean(id)}>
          Start
        </Button>
      </form>
    </div>
  );
};

export const DialogCreatePage = withAuthRedirect(DialogCreatePageView);

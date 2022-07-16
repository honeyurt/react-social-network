import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Layout } from './components/layout';
import { PagesRouter } from './pages/routing';
import { useAuth } from './hooks/use-auth';
import { useDialogs } from './hooks/use-dialogs';
import styles from './app.module.css';

export const App = observer(() => {
  const { getNewMessagesCount } = useDialogs();
  const { authData, loaded } = useAuth();

  useEffect(() => {
    if (authData?.id) {
      getNewMessagesCount();
    }
  }, [authData, getNewMessagesCount]);

  if (!loaded) return <div>Loading..</div>;

  return (
    <div className={styles.app}>
      <Layout>
        <PagesRouter />
      </Layout>
    </div>
  );
});

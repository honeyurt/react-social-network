import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useDispatch } from 'react-redux';
import { getNewMessagesCount } from './redux/actions/dialogs';
import { Layout } from './components/layout';
import { PagesRouter } from './pages/routing';
import { useAuth } from './hooks/use-auth';
import styles from './app.module.css';

export const App = observer(() => {
  const dispatch = useDispatch();
  const { authData, loaded } = useAuth();

  useEffect(() => {
    if (authData?.id) {
      dispatch(getNewMessagesCount());
    }
  }, [authData, dispatch]);

  if (!loaded) return <div>Loading..</div>;

  return (
    <div className={styles.app}>
      <Layout>
        <PagesRouter />
      </Layout>
    </div>
  );
});

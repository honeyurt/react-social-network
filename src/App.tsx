import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/reducers';
import { init } from './redux/actions/init';
import { getNewMessagesCount } from './redux/actions/dialogs';
import { Layout } from './components/layout';
import { PagesRouter } from './pages/routing';
import styles from './app.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const { initialized } = useSelector((state: RootState) => state.init);

  React.useEffect(() => {
    dispatch(init());
    dispatch(getNewMessagesCount());
  }, [dispatch]);

  if (!initialized) return <div>Loading..</div>;

  return (
    <div className={styles.app}>
      <Layout>
        <PagesRouter />
      </Layout>
    </div>
  );
};

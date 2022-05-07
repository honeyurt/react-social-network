import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/reducers';
import { init } from './redux/actions/init';
import { getNewMessagesCount } from './redux/actions/dialogs';

import { Layout } from './components/layout';

import Home from './pages/Home';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Dialogs from './components/Messenger/Dialogs';
import Users from './components/Users/Users';
import Video from './components/Video/Video';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import NotFound from './pages/NotFound';
import StartMessaging from './components/Messenger/Messages/StartMessaging/StartMessaging';
import Chat from './components/Chat/Chat';

import styles from './app.module.css';

const App = () => {
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/:userId?" component={Profile} />
          <Route exact path="/news" component={News} />
          <Route exact path="/dialogs/:userId?/:messages?" component={Dialogs} />
          <Route exact path="/dialog-create" component={StartMessaging} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/users/" component={Users} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/login" component={Login} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;

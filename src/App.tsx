import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/reducers';
import { init } from './redux/actions/init';

import Home from './pages/Home';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Messages from './components/Messenger/Messages';
import Users from './components/Users/Users';
import Video from './components/Video/Video';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import NotFound from './pages/NotFound';

import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const { initialized } = useSelector((state: RootState) => state.init);

  React.useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  if (!initialized) return <div>Loading..</div>;
  return (
    <div className={styles.wrapper}>
      <Header />
      <Navbar />
      <div className={styles.content}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/:userId?" component={Profile} />
          <Route exact path="/news" component={News} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/users/" component={Users} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/login" component={Login} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;

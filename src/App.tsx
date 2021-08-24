import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Messages from './components/Messenger/Messages';
import Users from './components/Users/Users';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NotFound from './pages/NotFound';

import styles from './App.module.css';

const App = () => {
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
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

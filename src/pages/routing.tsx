import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from '../components/Chat/Chat';
import Dialogs from '../components/Messenger/Dialogs';
import StartMessaging from '../components/Messenger/Messages/StartMessaging/StartMessaging';
import Profile from '../components/Profile/Profile';
import Settings from '../components/Settings/Settings';
import Users from '../components/Users/Users';
import { HomePage } from './home';
import { LoginPage } from './login';
import { NewsPage } from './news';
import { NotFound } from './not-found';
import { ROOT_ROUTE, NEWS_ROUTE, LOGIN_ROUTE } from './routes';

export const PagesRouter = () => (
  <Switch>
    <Route exact path={ROOT_ROUTE} component={HomePage} />
    <Route exact path="/profile/:userId?" component={Profile} />
    <Route exact path={NEWS_ROUTE} component={NewsPage} />
    <Route exact path="/dialogs/:userId?/:messages?" component={Dialogs} />
    <Route exact path="/dialog-create" component={StartMessaging} />
    <Route exact path="/chat" component={Chat} />
    <Route exact path="/users/" component={Users} />
    <Route exact path="/settings" component={Settings} />
    <Route exact path={LOGIN_ROUTE} component={LoginPage} />
    <Route exact path="*" component={NotFound} />
  </Switch>
);

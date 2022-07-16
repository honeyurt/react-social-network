import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from '../components/Chat/Chat';
import Dialogs from '../components/Messenger/Dialogs';
import StartMessaging from '../components/Messenger/Messages/StartMessaging/StartMessaging';
import { HomePage } from './home';
import { LoginPage } from './login';
import { NewsPage } from './news';
import { ProfilePage } from './profile';
import { SettingsPage } from './settings';
import { UsersPage } from './users';
import { NotFound } from './not-found';
import {
  ROOT_ROUTE,
  NEWS_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  SETTINGS_ROUTE,
  USERS_ROUTE,
} from './routes';

export const PagesRouter = () => (
  <Switch>
    <Route exact path={ROOT_ROUTE} component={HomePage} />
    <Route exact path={`${PROFILE_ROUTE}/:userId?`} component={ProfilePage} />
    <Route exact path={NEWS_ROUTE} component={NewsPage} />
    <Route exact path="/dialogs/:userId?/:messages?" component={Dialogs} />
    <Route exact path="/dialog-create" component={StartMessaging} />
    <Route exact path="/chat" component={Chat} />
    <Route exact path={USERS_ROUTE} component={UsersPage} />
    <Route exact path={SETTINGS_ROUTE} component={SettingsPage} />
    <Route exact path={LOGIN_ROUTE} component={LoginPage} />
    <Route exact path="*" component={NotFound} />
  </Switch>
);

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from '../components/Chat/Chat';
import Login from '../components/Login/Login';
import Dialogs from '../components/Messenger/Dialogs';
import StartMessaging from '../components/Messenger/Messages/StartMessaging/StartMessaging';
import Profile from '../components/Profile/Profile';
import Settings from '../components/Settings/Settings';
import Users from '../components/Users/Users';
import { Home } from './home';
import { NewsPageView } from './news';
import { VideosPageView } from './videos';
import { NotFound } from './not-found';
import { NEWS_ROUTE, VIDEOS_ROUTE } from './routes';

export const PagesRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/profile/:userId?" component={Profile} />
    <Route exact path={NEWS_ROUTE} component={NewsPageView} />
    <Route exact path="/dialogs/:userId?/:messages?" component={Dialogs} />
    <Route exact path="/dialog-create" component={StartMessaging} />
    <Route exact path="/chat" component={Chat} />
    <Route exact path="/users/" component={Users} />
    <Route exact path={VIDEOS_ROUTE} component={VideosPageView} />
    <Route exact path="/settings" component={Settings} />
    <Route exact path="/login" component={Login} />
    <Route exact path="*" component={NotFound} />
  </Switch>
);

import { ProfileIcon } from './icons/profile-icon';
import { NewsIcon } from './icons/news-icon';
import { MessengerIcon } from './icons/messenger-icon';
import { ChatIcon } from './icons/chat-icon';
import { UsersIcon } from './icons/users-icon';
import { SettingsIcon } from './icons/settings-icon';

export const NAVBAR_LINKS = [
  {
    to: '/profile',
    title: 'Profile',
    icon: ProfileIcon,
  },
  {
    to: '/news',
    title: 'News',
    icon: NewsIcon,
  },
  {
    to: '/dialogs',
    title: 'Messenger',
    icon: MessengerIcon,
    messenger: true,
  },
  {
    to: '/chat',
    title: 'Chat',
    icon: ChatIcon,
  },
  {
    to: '/users',
    title: 'Users',
    icon: UsersIcon,
  },
  {
    to: '/settings',
    title: 'Settings',
    icon: SettingsIcon,
  },
];

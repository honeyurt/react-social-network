import { followSuccess, unfollowSucces } from '../actions/users';
import { usersReducer } from './users';

const testState = {
  users: [
    {
      id: 0,
      name: 'Richard Hendriks',
      status: 'Programmer',
      photos: {
        small: null,
        large: null,
      },

      followed: false,
    },
    {
      id: 1,
      name: 'Erlich Bachman',
      status: 'Founder',
      photos: {
        small: null,
        large: null,
      },

      followed: true,
    },
  ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingProgress: [],
};

describe('Users Reducer', () => {
  test('Follow Success', () => {
    const newState = usersReducer(testState, followSuccess(0));

    expect(newState.users[0].followed).toBeTruthy();
  });

  test('Unfollow Succes', () => {
    const newState = usersReducer(testState, unfollowSucces(1));

    expect(newState.users[1].followed).toBeFalsy();
  });
});

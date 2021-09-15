import { addPost, deletePost } from '../actions/profile';
import { profileReducer } from './profile';

const testState = {
  posts: [
    {
      id: 0,
      text: 'Hello World!',
    },
    {
      id: 1,
      text: '!dlroW olleH',
    },
  ],
  profile: null,
  status: '',
};

describe('Profile Reducer', () => {
  test('Length of "posts" should be incremented', () => {
    const action = addPost(2, 'Something.');

    const newState = profileReducer(testState, action);

    expect(newState.posts.length).toBe(3);
  });

  test('Length of "posts" should be decremented', () => {
    const action = deletePost(0);

    const newState = profileReducer(testState, action);

    expect(newState.posts.length).toBe(1);
  });

  test('Length of "posts" shouldnt be decremented', () => {
    const action = deletePost(666);

    const newState = profileReducer(testState, action);

    expect(newState.posts.length).toBe(2);
  });
});

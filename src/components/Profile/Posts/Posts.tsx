import React from 'react';

import styles from './Posts.module.css';

const Posts = () => {
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className={styles.profile__bottom}>
      <h2>Posts</h2>
      <form method="submit" id="posts" onSubmit={onSubmitHandler}>
        <textarea placeholder="your news.." form="posts"></textarea>
        <button form="posts">Add post</button>
      </form>
    </div>
  );
};

export default Posts;

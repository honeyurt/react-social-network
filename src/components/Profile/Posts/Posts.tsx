import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormInputs, PostSchema } from '../../../utils/schemas/postSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost } from '../../../redux/actions/profile';
import { RootState } from '../../../redux/reducers';
import { Button } from '../../button';
import styles from './Posts.module.css';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.profile);

  const form = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(PostSchema),
  });

  const onSubmit = (data: IFormInputs) => {
    const id = Math.random();
    console.log(id);
    dispatch(addPost(id, data.text));

    form.reset();
  };

  const onDeletePostHandler = (id: number) => {
    dispatch(deletePost(id));
  };

  return (
    <div className={styles.profile__bottom}>
      <h2>Posts</h2>
      <form method="submit" id="posts" onSubmit={form.handleSubmit(onSubmit)}>
        <textarea placeholder="your news.." form="posts" {...form.register('text')}></textarea>
        <Button>Add post</Button>
      </form>
      <div className={styles.profile__posts}>
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className={styles.profile__post}>
              <div className={styles.post__image}></div>
              <div className={styles.post__text}>{post.text}</div>
              <span
                className={styles.post__delete}
                onClick={onDeletePostHandler.bind(null, post.id)}></span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;

import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormInputs, VideosSchema } from '../../utils/schemas/videosSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { execute } from '../../redux/actions/video';
import { Button } from '../button';
import { PageLayout } from '../page-layout';
import styles from './Video.module.css';

const YOUTUBE_URL = 'https://www.youtube.com/embed/';

const Music = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.video);

  const form = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(VideosSchema),
  });

  const onSubmit = (data: IFormInputs) => {
    dispatch(execute(data.text, 10));
  };

  return (
    <PageLayout title="Videos">
      <div className={styles.video__search}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <input type="text" placeholder="Search" {...form.register('text')} />
          <Button type="submit" disabled={!form.formState.isValid}>
            Search
          </Button>
        </form>
      </div>
      <div className={styles.video__items}>
        {items &&
          items.map((item) => (
            <div className={styles.video__item} key={item.etag}>
              <iframe src={`${YOUTUBE_URL}${item.id.videoId}`} title="Video" loading="lazy" />
              <div className={styles.item__info}>
                <p>{item.snippet.title}</p>
                <p>{new Date(item.snippet.publishedAt).getFullYear()}</p>
              </div>
            </div>
          ))}
      </div>
    </PageLayout>
  );
};

export default withAuthRedirect(Music);

import React, { useState } from 'react';
import { useVideos } from '../../hooks/use-videos';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import { Button } from '../../components/button';
import { PageLayout } from '../../components/page-layout';
import { VideosList } from './videos-list';
import styles from './styles.module.css';

const VideosPage = () => {
  const [input, setInput] = useState('');
  const { isLoading, getVideosByTitle, videos, hasQuery } = useVideos();
  const hasVideos = Boolean(videos?.items);

  // TODO: add spinner
  if (isLoading) {
    return <div>loading..</div>;
  }

  return (
    <PageLayout title="Videos">
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
        />
        <Button
          type="submit"
          disabled={!Boolean(input.trim())}
          onClick={() => getVideosByTitle(input)}>
          Search
        </Button>
      </div>
      {hasQuery && hasVideos && <VideosList videos={videos.items} />}
    </PageLayout>
  );
};

export const VideosPageView = withAuthRedirect(VideosPage);

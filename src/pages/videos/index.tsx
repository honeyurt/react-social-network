import React, { useState } from 'react';
import { useVideos } from '../../hooks/use-videos';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import { Button } from '../../components/button';
import { PageLayout } from '../../components/page-layout';
import { VideosList } from './videos-list';
import { Circles } from 'react-loader-spinner';
import styles from './styles.module.css';

const VideosPage = () => {
  const [input, setInput] = useState('');
  const { isLoading, getVideosByTitle, videos, hasQuery } = useVideos();

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
      {isLoading && <Circles wrapperClass={styles.loader} color="#3498db" width={60} height={60} />}
      {hasQuery && videos && <VideosList videos={videos.items} />}
    </PageLayout>
  );
};

export const VideosPageView = withAuthRedirect(VideosPage);

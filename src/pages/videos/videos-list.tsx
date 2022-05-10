import React from 'react';
import format from 'date-fns/format';
import ReactPlayer from 'react-player';
import { Video } from '../../types/videos/video';
import styles from './styles.module.css';

type VideosListProps = {
  /**
   * Список видео
   */
  videos: Video[];
};

const YOUTUBE_URL = 'https://www.youtube.com/embed/';

export const VideosList = ({ videos }: VideosListProps) => {
  return (
    <>
      {videos.map(({ etag, id: { videoId }, snippet }) => (
        <div className={styles.video} key={etag}>
          <ReactPlayer url={`${YOUTUBE_URL}${videoId}`} width={350} height={200} />
          <div className={styles.info}>
            <div>{snippet.title}</div>
            <div>{format(new Date(snippet.publishedAt), 'PPp')}</div>
          </div>
        </div>
      ))}
    </>
  );
};

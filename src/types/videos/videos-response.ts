import { Video } from './video';
import { PageInfo } from './page-info';

export type VideosResponse = {
  etag: string;
  items: Video[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  regionCode: string;
};

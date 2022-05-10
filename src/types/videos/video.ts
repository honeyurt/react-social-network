import { VideoId } from './video-id';
import { Snippet } from './snippet';

export type Video = {
  kind: string;
  etag: string;
  id: VideoId;
  snippet: Snippet;
};

type VideoId = {
  kind: string;
  videoId: string;
};

type VideoSnippet = {
  publishedAt: string;
  title: string;
};

type VideoType = {
  kind: string;
  etag: string;
  id: VideoId;
  snippet: VideoSnippet;
};

export interface VideoState {
  items: Array<VideoType> | null;
}

export enum VideoActionTypes {
  FIND_VIDEO = 'FIND_VIDEO',
}

interface FindVideo {
  type: VideoActionTypes.FIND_VIDEO;
  payload: Array<VideoType>;
}

export type VideoAction = FindVideo;

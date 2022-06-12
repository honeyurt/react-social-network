import { action, observable, makeObservable, runInAction } from 'mobx';
import { createContext } from 'react';
import { VideosResponse } from '../types/videos/videos-response';
import { apiVideos } from '../API/videos';
import { AxiosResponse } from 'axios';

class VideosStore {
  constructor() {
    makeObservable(this, {
      videos: observable,
      getVideos: action,
    });
  }

  videos: null | VideosResponse = null;

  getVideos = async (title: string) => {
    let response: AxiosResponse;

    try {
      response = await apiVideos.getVideos(title);
    } finally {
      runInAction(() => {
        if (response) {
          this.videos = response.data;
        }
      });
    }
  };
}

const context = createContext(new VideosStore());

export { context as VideosStoreContext };

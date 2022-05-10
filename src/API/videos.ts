import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = process.env.REACT_APP_YOTUBE_API_KEY;
/**
 * By default we get 10 videos.
 * In future, need to be fixed.
 */
const MAX = 10;

interface IApiVideos {
  /**
   * Получение видео
   */
  getVideos(title: string): Promise<AxiosResponse>;
}

class ApiVideos implements IApiVideos {
  getVideos(title: string): Promise<AxiosResponse> {
    return axios.get(
      `${API_URL}?key=${API_KEY}&part=snippet&q=${title}&maxResults=${MAX}&type=video`,
    );
  }
}

const apiVideos = new ApiVideos();

export { apiVideos };

import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '0d4eaa58-fbd1-4100-aa13-90d4b08b617a' },
});

import { instance } from './api';
import { GetUsersResponse, GetUsersRequest } from '../types/users/';

interface IApiUsers {
  getUsers(body: GetUsersRequest): Promise<GetUsersResponse>;
  followUser(userId: number): Promise<void>;
  unfollowUser(userId: number): Promise<void>;
}

class ApiUsers implements IApiUsers {
  getUsers(body: GetUsersRequest): Promise<GetUsersResponse> {
    const { page, count, term, friend } = body;

    return instance.get(`/users?page=${page}&count=${count}&term=${term}&friend=${friend}`);
  }

  followUser(userId: number): Promise<void> {
    return instance.post(`/follow/${userId}`);
  }

  unfollowUser(userId: number): Promise<void> {
    return instance.delete(`/follow/${userId}`);
  }
}

const apiUsers = new ApiUsers();

export { apiUsers };

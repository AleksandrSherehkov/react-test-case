import { instance } from './axiosInstance';

const API_ENDPOINT = '/users';

export const fetchTweets = async () => {
  try {
    const response = await instance.get(API_ENDPOINT);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch tweets');
  }
};

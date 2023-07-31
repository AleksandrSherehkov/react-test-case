import { instance } from './axiosInstance';

const API_ENDPOINT = '/users';

export const fetchTweets = async (state = 'all') => {
  const queries = state === 'all' ? '' : `?isFollowed=${state === 'isFollowed'}`;

  try {
    const response = await instance.get(`${API_ENDPOINT}/${queries}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch tweets');
  }
};

export const toggleFollowersStatus = async (id, isFollowed, calcFollowers) => {
  const response = await instance.put(`${API_ENDPOINT}/${id}`, {
    isFollowed,
    followers: calcFollowers,
  });
  return response;
};

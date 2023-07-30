import { instance } from './axiosInstance';

const API_ENDPOINT = '/users';

export const fetchTweets = async (state = 'all') => {
  const queries = state === 'all' ? '' : `?completed=${state === 'completed'}`;
  const response = await instance.get(`${API_ENDPOINT}/${queries}`);
  return response.data;
  // try {
  //   const response = await instance.get(API_ENDPOINT);
  //   return response.data;
  // } catch (error) {
  //   throw new Error('Failed to fetch tweets');
  // }
};

export const toggleFollowersStatus = async (id, isFollowed) => {
  const response = await instance.put(`${API_ENDPOINT}/${id}`, {
    //followers: updatedFollowers,
    isFollowed,
  });
  return response;
};

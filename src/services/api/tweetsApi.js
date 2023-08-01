import { instance } from './axiosInstance';

const API_ENDPOINT = '/users';

// Функція для отримання твітів з сервера
export const fetchTweets = async (state = 'all') => {
  const queries = state === 'all' ? '' : `?isFollowed=${state === 'isFollowed'}`;

  try {
    const response = await instance.get(`${API_ENDPOINT}/${queries}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch tweets');
  }
};

// Функція для зміни статусу фолловерів
export const toggleFollowersStatus = async (id, isFollowed, calcFollowers) => {
  try {
    const response = await instance.put(`${API_ENDPOINT}/${id}`, {
      isFollowed,
      followers: calcFollowers,
    });
    return response;
  } catch (error) {
    throw new Error('Failed to toggle followers status');
  }
};

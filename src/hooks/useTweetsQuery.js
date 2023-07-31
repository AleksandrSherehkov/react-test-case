import { useQuery } from '@tanstack/react-query';
import { fetchTweets } from '@/services/api/tweetsApi';

export const useTweetsQuery = state => {
  return useQuery({
    queryFn: () => fetchTweets(state),
    queryKey: ['tweets', state],
    staleTime: 1000 * 5,
  });
};

import { LoadingIndicator } from '@/components/LaadingIndicator/LaadingIndicator';
import { ErrorIndicator } from '@/components/ErrorIndicator/ErrorIndicator';

import { NoTweetsFound } from '@/components/NoTweetsFound/NoTweetsFound';
import { TweetCard } from '@/components/TweetCard/TweetCard';
import { fetchTweets } from '@/services/api/tweetsApi';
import { useQuery } from '@tanstack/react-query';

export const TweetsList = () => {
  const {
    isLoading,
    error,
    data: users,
    isSuccess,
  } = useQuery({
    queryKey: ['tweets', 'all'],
    queryFn: () => fetchTweets('all'),
  });

  if (isLoading) return <LoadingIndicator />;

  if (error) return <ErrorIndicator error={error} />;

  if (users.length === 0) {
    return <NoTweetsFound />;
  }

  return (
    <ul className="flex flex-col justify-center items-center flex-wrap gap-10 w-full">
      {isSuccess && users.map(user => <TweetCard key={user.id} data={user} />)}
    </ul>
  );
};

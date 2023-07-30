import { LoadingIndicator } from '@/components/LaadingIndicator/LaadingIndicator';
import { ErrorIndicator } from '@/components/ErrorIndicator/ErrorIndicator';
import { useQuery } from 'react-query';
import { NoTweetsFound } from '@/components/NoTweetsFound/NoTweetsFound';
import { TweetCard } from '@/components/TweetCard/TweetCard';
import { fetchTweets } from '@/services/api/tweetsApi';

export const TweetsList = () => {
  const { isLoading, error, data: users, isSuccess } = useQuery('tweets', fetchTweets);

  if (isLoading) return <LoadingIndicator />;

  if (error) return <ErrorIndicator error={error} />;

  if (users.length === 0) {
    return <NoTweetsFound />;
  }

  return <ul>{isSuccess && users.map(user => <TweetCard key={user.id} data={user} />)}</ul>;
};

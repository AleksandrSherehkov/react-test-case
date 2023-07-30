import { LoadingIndicator } from '@/components/LaadingIndicator/LaadingIndicator';
import { ErrorIndicator } from '@/components/ErrorIndicator/ErrorIndicator';
import { useQuery } from 'react-query';
import { NoTweetsFound } from '@/components/NoTweetsFound/NoTweetsFound';
import { TweetCard } from '@/components/TweetCard/TweetCard';

export const TweetsList = () => {
  const {
    isLoading,
    error,
    data: users,
  } = useQuery('tweets', () =>
    fetch('https://64c67e5d0a25021fde91b4af.mockapi.io/users').then(res => res.json())
  );

  if (isLoading) return <LoadingIndicator />;

  if (error) return <ErrorIndicator error={error} />;

  if (users.length === 0) {
    return <NoTweetsFound />;
  }

  console.log(users);
  return (
    <ul>
      {users.map(user => (
        <TweetCard key={user.id} data={user} />
      ))}
    </ul>
  );
};

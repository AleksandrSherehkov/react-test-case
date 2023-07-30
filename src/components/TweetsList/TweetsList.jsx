import { useQuery } from 'react-query';

export const TweetsList = () => {
  const { isLoading, error, data } = useQuery('tweets', () =>
    fetch('https://64c67e5d0a25021fde91b4af.mockapi.io/users').then(res => res.json())
  );
  console.log(data);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return <div>TweetsList</div>;
};

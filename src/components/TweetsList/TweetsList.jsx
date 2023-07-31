import PropTypes from 'prop-types';
import { LoadingIndicator } from '@/components/LaadingIndicator/LaadingIndicator';
import { ErrorIndicator } from '@/components/ErrorIndicator/ErrorIndicator';

import { NoTweetsFound } from '@/components/NoTweetsFound/NoTweetsFound';
import { TweetCard } from '@/components/TweetCard/TweetCard';

import { useTweetsQuery } from '@/hooks/useTweetsQuery';

export const TweetsList = ({ state }) => {
  const { isLoading, error, data: users, isSuccess } = useTweetsQuery(state);

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

TweetsList.propTypes = {
  state: PropTypes.any.isRequired,
};

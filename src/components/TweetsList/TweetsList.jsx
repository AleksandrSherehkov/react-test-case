import PropTypes from 'prop-types';
import { useTweetsQuery } from '@/hooks/useTweetsQuery';

import { useLoadMore } from '@/hooks/useLoadMore';

import { LoadingIndicator } from '@/components/LoadingIndicator/LoadingIndicator';
import { ErrorIndicator } from '@/components/ErrorIndicator/ErrorIndicator';
import { NoTweetsFound } from '@/components/NoTweetsFound/NoTweetsFound';
import { TweetCard } from '@/components/TweetCard/TweetCard';

export const TweetsList = ({ state }) => {
  const TWEETS_PER_PAGE = 3;

  const { isLoading, error, data: users } = useTweetsQuery(state);

  const { perPage, loadMore } = useLoadMore(TWEETS_PER_PAGE);

  if (isLoading) return <LoadingIndicator />;

  if (error) return <ErrorIndicator error={error} />;

  if (users.length === 0) {
    return <NoTweetsFound />;
  }

  const showUsers = users.slice(0, perPage);

  const isShowBtn = users.length > showUsers.length;

  return (
    <>
      <ul className="flex  justify-center items-center flex-wrap gap-[48px] w-full mt-20">
        {showUsers.map(user => (
          <TweetCard key={user.id} data={user} />
        ))}
      </ul>

      {isShowBtn && (
        <button
          type="button"
          onClick={loadMore}
          className="flex justify-center items-centertext-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 transition-all duration-300 ease-in-out hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 m-auto mt-10 "
        >
          Load More
        </button>
      )}
    </>
  );
};

TweetsList.propTypes = {
  state: PropTypes.string.isRequired,
};

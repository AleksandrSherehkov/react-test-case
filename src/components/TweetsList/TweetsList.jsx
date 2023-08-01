import PropTypes from 'prop-types';
import { useTweetsQuery } from '@/hooks/useTweetsQuery';

import { LoadingIndicator } from '@/components/LaadingIndicator/LaadingIndicator';
import { ErrorIndicator } from '@/components/ErrorIndicator/ErrorIndicator';
import { NoTweetsFound } from '@/components/NoTweetsFound/NoTweetsFound';
import { TweetCard } from '@/components/TweetCard/TweetCard';
import { useLoadMore } from '@/hooks/useLoadMore';

export const TweetsList = ({ state }) => {
  // Кількість твітів на одній сторінці пагінації
  const TWEETS_PER_PAGE = 3;

  // Використовуємо хук useTweetsQuery для отримання даних про твіти
  const { isLoading, error, data: users } = useTweetsQuery(state);

  // Використовуємо хук useLoadMore для організації завантаження додаткових твітів
  const { perPage, loadMore } = useLoadMore(TWEETS_PER_PAGE);

  // Показуємо індікатор завантаження, якщо дані ще завантажуються
  if (isLoading) return <LoadingIndicator />;

  // Показуємо повідомлення про помилку, якщо сталася помилка при завантаженні даних
  if (error) return <ErrorIndicator error={error} />;

  // Показуємо повідомлення, якщо список твітів порожній
  if (users.length === 0) {
    return <NoTweetsFound />;
  }

  // Обмежуємо список твітів кількістю, яка відображається на сторінці
  const showUsers = users.slice(0, perPage);

  // Визначаємо, чи потрібно показувати кнопку "Load More" для завантаження додаткових твітів
  const isShowBtn = users.length > showUsers.length;

  return (
    <>
      <ul className="flex flex-col justify-center items-center flex-wrap gap-10 w-full">
        {showUsers.map(user => (
          <TweetCard key={user.id} data={user} />
        ))}
      </ul>

      {isShowBtn && (
        <button type="button" onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
};

TweetsList.propTypes = {
  state: PropTypes.string.isRequired,
};

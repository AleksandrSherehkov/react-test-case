import { TweetsList } from '@/components/TweetsList/TweetsList';
import { useState } from 'react';

export const TweetsViewer = () => {
  const [view, setView] = useState('all');

  return (
    <div>
      <div>
        <button variant={view === 'all' ? 'outline' : 'solid'} onClick={() => setView('all')}>
          all
        </button>
        <button variant={view === 'follow' ? 'outline' : 'solid'} onClick={() => setView('follow')}>
          Follow
        </button>
        <button
          variant={view === 'isFollowed' ? 'outline' : 'solid'}
          onClick={() => setView('isFollowed')}
        >
          followings
        </button>
      </div>

      <TweetsList state={view} />
    </div>
  );
};

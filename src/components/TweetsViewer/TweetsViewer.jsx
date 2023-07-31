import { TweetsList } from '@/components/TweetsList/TweetsList';
import { useState } from 'react';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import { Link } from 'react-router-dom';

export const TweetsViewer = () => {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'follow', label: 'Follow' },
    { value: 'isFollowed', label: 'Followings' },
  ];

  const [view, setView] = useState('all');

  return (
    <div>
      <Link to="/">toBack</Link>
      <div>
        <Dropdown
          options={options}
          selectedOption={view}
          onSelectOption={selectedOption => setView(selectedOption)}
        />
      </div>

      <TweetsList state={view} />
    </div>
  );
};

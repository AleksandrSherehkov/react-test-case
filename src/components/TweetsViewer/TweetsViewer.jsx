import { useState } from 'react';
import { Link } from 'react-router-dom';

import { dropdownOptions } from '@/services/dropdownOptions';

import { TweetsList } from '@/components/TweetsList/TweetsList';
import { Dropdown } from '@/components/Dropdown/Dropdown';

export const TweetsViewer = () => {
  // Стан для вибраного значення фільтру
  const [view, setView] = useState('all');

  return (
    <div>
      <Link to="/">toBack</Link>
      <div>
        <Dropdown
          options={dropdownOptions}
          selectedOption={view}
          onSelectOption={selectedOption => setView(selectedOption)}
        />
      </div>

      <TweetsList state={view} />
    </div>
  );
};

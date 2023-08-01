import { useState } from 'react';

import { dropdownOptions } from '@/services/dropdownOptions';

import { TweetsList } from '@/components/TweetsList/TweetsList';
import { Dropdown } from '@/components/Dropdown/Dropdown';

export const TweetsViewer = () => {
  // Стан для вибраного значення фільтру
  const [view, setView] = useState('all');

  return (
    <>
      <Dropdown
        options={dropdownOptions}
        selectedOption={view}
        onSelectOption={selectedOption => setView(selectedOption)}
      />

      <TweetsList state={view} />
    </>
  );
};

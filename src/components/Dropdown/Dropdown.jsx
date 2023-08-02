import PropTypes from 'prop-types';

import { GoBack } from '@/components/GoBack/GoBack';

export const Dropdown = ({ options, selectedOption, onSelectOption }) => {
  return (
    <div className="flex justify-between items-center">
      <GoBack />
      <select
        tabIndex="0"
        value={selectedOption}
        onChange={e => onSelectOption(e.target.value)}
        className="bg-gray-200 rounded-lg p-2 cursor-pointer"
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onSelectOption: PropTypes.func.isRequired,
};

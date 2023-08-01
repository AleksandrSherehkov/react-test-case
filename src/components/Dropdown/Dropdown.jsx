import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Dropdown = ({ options, selectedOption, onSelectOption }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link
          to="/"
          className="transition-all duration-1000 ease-in-out text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Go Back
        </Link>
      </div>
      <select
        value={selectedOption}
        onChange={e => onSelectOption(e.target.value)}
        className="bg-gray-200 rounded-lg p-2 cursor-pointer"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
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

import PropTypes from 'prop-types';

export const Dropdown = ({ options, selectedOption, onSelectOption }) => {
  return (
    <select
      value={selectedOption}
      onChange={e => onSelectOption(e.target.value)}
      className="bg-gray-200 rounded-lg p-2"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
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

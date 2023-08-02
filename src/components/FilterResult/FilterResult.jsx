import PropTypes from 'prop-types';

export const FilterResult = ({ users: { length } }) => {
  return (
    <div className="flex items-center justify-center">
      <p className="shadow-link p-2 rounded-lg text-2xl font-semibold text-yellow-500">
        Filtered: <span className="italic">{length} users</span>
      </p>
    </div>
  );
};

FilterResult.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

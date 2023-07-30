import PropTypes from 'prop-types';
export const ErrorIndicator = ({ error: { message } }) => (
  <div>
    <h2>An error has occurred:</h2>
    <p>{message}</p>
  </div>
);

ErrorIndicator.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
};

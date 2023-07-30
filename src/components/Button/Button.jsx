import PropTypes from 'prop-types';
export const Button = ({ text = 'Follow' }) => {
  return <button type="button">{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
};

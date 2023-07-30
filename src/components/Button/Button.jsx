import PropTypes from 'prop-types';
export const Button = ({ text = 'Follow', toggle }) => {
  return (
    <button
      onClick={toggle}
      type="button"
      className="flex justify-center items-center w-196 h-50 rounded-[10.311px] bg-[#EBD8FF] shadow-[-2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px rgba(0, 0, 0, 0.23) text-[#373737] uppercase text-lg font-semibold"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  toggle: PropTypes.func.isRequired,
  text: PropTypes.string,
};

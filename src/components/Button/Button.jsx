import PropTypes from 'prop-types';

export const Button = ({ text = 'Follow', toggle, disabled }) => {
  const backgroundColorClass = text === 'Follow' ? 'bg-[#EBD8FF]' : 'bg-[#5CD3A8]';

  return (
    <button
      disabled={disabled}
      onClick={toggle}
      type="button"
      className={` ${backgroundColorClass}  flex justify-center items-center w-196 h-50  mt-[26px] rounded-[10.311px] shadow-[0_3.4369285106658936px_3.4369285106658936px_0_rgba(0, 0, 0, 0.25)] uppercase text-lg font-semibold transition-all duration-300 ease-in-out hover:shadow-md hover:border-2 hover:border-purple-500`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

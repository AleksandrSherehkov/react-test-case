import PropTypes from 'prop-types';

export const Button = ({ text = 'Follow', toggle, disabled }) => {
  const backgroundColorClass = text === 'Follow' ? 'bg-[#EBD8FF]' : 'bg-[#5CD3A8]';

  return (
    <button
      disabled={disabled}
      onClick={toggle}
      type="button"
      className={` ${backgroundColorClass}  flex justify-center items-center w-196 h-50  mt-[26px] rounded-[10.311px] shadow-[0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.25)] text-[#373737] uppercase text-lg font-semibold transition-all duration-1000 ease-in-out hover:shadow-md`}
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

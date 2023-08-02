import PropTypes from 'prop-types';

export const ErrorIndicator = ({ error: { message } }) => (
  <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 w-full">
    <h2 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">
      An error has occurred:
    </h2>
    <p>{message}</p>
  </div>
);

ErrorIndicator.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
};

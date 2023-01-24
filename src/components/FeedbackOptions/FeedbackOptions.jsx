import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={option}>
          <button
            type="button"
            className={css.btn}
            onClick={() => {
              onClick(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;

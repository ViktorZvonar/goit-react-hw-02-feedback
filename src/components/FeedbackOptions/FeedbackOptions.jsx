import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => {
  const keys = Object.keys(options);
  return (
    <ul className={css.list}>
      {keys.map(key => (
        <li key={key}>
          <button
            type="button"
            className={css.btn}
            onClick={() => {
              onClick(key);
            }}
          >
            {key}
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

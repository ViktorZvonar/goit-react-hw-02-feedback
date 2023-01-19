import PropTypes from 'prop-types';

import css from './Section.module.css';

const Section = ({ options, title, onClick }) => {
  const keys = Object.keys(options);
  return (
    <section className={css.section}>
      <h1>{title}</h1>
      <ul>
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
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;

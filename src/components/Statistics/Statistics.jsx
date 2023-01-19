// import { Component } from 'react';
import PropTypes from 'prop-types';

// import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  totalClicks,
  positiveClicks,
  title,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalClicks}</p>
      <p>Positive feedback: {positiveClicks}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalClicks: PropTypes.number.isRequired,
  positiveClicks: PropTypes.number.isRequired,
};

export default Statistics;

Statistics.defaultProps = {
  positiveClicks: 0,
};

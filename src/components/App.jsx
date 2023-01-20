import { Component } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalClicks = () => {
    return Number(this.state.bad + this.state.good + this.state.neutral);
  };

  countPositiveClicks = () => {
    if (!this.countTotalClicks()) {
      return;
    }

    return Math.round((this.state.good * 100) / this.countTotalClicks());
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          fontSize: 22,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onClick={this.onClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalClicks() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalClicks={this.countTotalClicks()}
              positiveClicks={this.countPositiveClicks()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

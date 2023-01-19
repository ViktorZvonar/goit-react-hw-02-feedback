import { Component } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = name => {
    this.setState(prevState => {
      // console.log(prevState);
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

    return Number(
      ((Number(this.state.good) * 100) / this.countTotalClicks()).toFixed()
    );
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
        <Section
          title="Please leave feedback"
          options={this.state}
          onClick={this.onClick}
        ></Section>

        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          totalClicks={this.countTotalClicks()}
          positiveClicks={this.countPositiveClicks()}
        />
      </div>
    );
  }
}

export default App;

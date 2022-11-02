import React, { Component } from 'react';
import { Box } from './Box';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, item) => (acc = acc + item),
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good / total) * 100);
  };

  onLeaveFeedback = e => {
    const option = e.target.getAttribute('name').toLowerCase();

    // add effect after click button
    e.target.classList.add('click');
    setTimeout(() => {
      e.target.classList.remove('click');
    }, 100);

    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    return (
      <Box bg="mainBg" color="text">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Box>
    );
  }
}

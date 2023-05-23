import React, { useState, useEffect } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);
  const [hasFeedback, setHasFeedback] = useState(false);

  const handleFeedback = (option) => {
    setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1
    }));
  };

  useEffect(() => {
    const countTotalFeedback = () => {
      const { good, neutral, bad } = feedback;
      return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
      const { good } = feedback;
      const total = countTotalFeedback();
      return total > 0 ? Math.round((good / total) * 100) : 0;
    };

    const total = countTotalFeedback();
    setTotalFeedback(total);
    setPositivePercentage(countPositiveFeedbackPercentage());
    setHasFeedback(total > 0);
  }, [feedback]);

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {hasFeedback ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback yet." />
        )}
      </Section>
    </div>
  );
};

import {Section, FeedbackOptions, Statistics, Notification} from 'components';

import { Wrapper } from "./App.styled";
import { useState } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = feedback;
  
  const handleFeedback = type => {
    setFeedback(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  
  return (
    <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>        
        <Section title="Statistics">
          {totalFeedback > 0
          ? <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positiveFeedback={positiveFeedback} />
          : <Notification message="There is no feedback" />
          }
        </Section>  
      </Wrapper>
  )
}

export default App;
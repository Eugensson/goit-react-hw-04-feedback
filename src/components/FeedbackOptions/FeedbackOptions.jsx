import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackContainer,
  FeedbackButton,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackContainer>
      <FeedbackButton type="button" onClick={() => onLeaveFeedback(options[0])}>
        Good
      </FeedbackButton>
      <FeedbackButton type="button" onClick={() => onLeaveFeedback(options[1])}>
        Neutral
      </FeedbackButton>
      <FeedbackButton type="button" onClick={() => onLeaveFeedback(options[2])}>
        Bad
      </FeedbackButton>
    </FeedbackContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

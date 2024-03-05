import PropTypes from 'prop-types';

import { Wrapper, Title, Value } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (        
        <Wrapper>
            <Title>Good:
                <Value>{good}</Value>
            </Title>
            <Title>Neutral:
                <Value>{neutral}</Value>                
            </Title>
            <Title>Bad:
                <Value>{bad}</Value>                
            </Title>
            <Title>Total:
                <Value>{total}</Value>                
            </Title>
            <Title>Positive feedback:
                <Value>{positiveFeedback}%</Value>                
            </Title>
        </Wrapper>
    )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
import PropTypes from 'prop-types';

import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from "react-icons/bs";
import { IconContext } from "react-icons";

import { Wrapper, Btn } from './FeedbackOptions.styled';


const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <Wrapper>  
      <Btn type="button" onClick={() => onLeaveFeedback(options[0])}>
        Good
        <IconContext.Provider value={{ size: '20px' }}>
          <BsEmojiSmile />
        </IconContext.Provider>
      </Btn>
      <Btn type="button" onClick={() => onLeaveFeedback(options[1])}>
        Neutral
        <IconContext.Provider value={{ size: '20px' }}>
          <BsEmojiNeutral />
        </IconContext.Provider>
      </Btn>
      <Btn type="button" onClick={() => onLeaveFeedback(options[2])}>
        Bad
        <IconContext.Provider value={{ size: '20px' }}>
          <BsEmojiFrown />
        </IconContext.Provider>
      </Btn>
    </Wrapper>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
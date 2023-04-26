import PropTypes from 'prop-types';
import { SectionTitle } from 'components/Section/Section.styled';

const Section = ({ title, children }) => {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;

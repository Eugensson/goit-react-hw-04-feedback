import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding: 20px;
`;

export const FeedbackButton = styled.button`
  background-color: #c0c0c0;
  color: #292929;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #666;
    color: #fff;
  }
`;

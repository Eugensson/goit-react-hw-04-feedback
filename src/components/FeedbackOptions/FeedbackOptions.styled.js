import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

export const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 10px;
    min-width: 110px;

    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    border: 2px solid;
    border-color: #ffffff;
    border-radius: 5px;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        color: #00004d;
        background-color: #ffffff;
    }
`;
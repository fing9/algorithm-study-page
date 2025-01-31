import styled from '@emotion/styled';

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  background-image: linear-gradient(
    90deg,
    rgba(222, 238, 247, 1) 0%,
    rgba(235, 231, 245, 1) 20%,
    rgba(249, 243, 230, 1) 38%,
    rgba(249, 235, 239, 1) 56%,
    rgba(249, 243, 230, 1) 74%,
    rgba(222, 238, 247, 1) 93%
  );
  height: 20rem;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: -2px;
  & div {
    color: var(--color-textgrey);
    text-align: center;
    padding: 10px 15px 10px 15px;
    width: 50px;
    cursor: pointer;
    :hover {
      font-weight: bold;
      color: black;
    }
  }
  .selected {
    font-weight: bold;
    color: black;
    border-bottom: 3px solid black;
  }
`;

export const Board = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
`;

export const ContentWrapper = styled.div`
  margin: 30px 20px 20px 20px;
`;

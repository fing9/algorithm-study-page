import styled from '@emotion/styled';

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    font-weight: bold;
    margin: 10px 15px 10px 15px;
  }
  .clickable {
    cursor: pointer;
  }
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  backdrop-filter: blur(4px);
`;

export const Board = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
  height: 20rem;
`;

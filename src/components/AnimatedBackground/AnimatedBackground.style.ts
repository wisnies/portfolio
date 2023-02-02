import styled, { keyframes } from 'styled-components';

const animate1 = keyframes`
    0% {
        transform: translateY(-50%);
    }
    100% {
        transform: translateY(0);
    }
`;
const animate2 = keyframes`
    0% {
        transform: translateY(-50%);
    }
    100% {
        transform: translateY(50%);
    }
`;

export const Container = styled.div`
  box-sizing: content-box;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: gray;
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const Row = styled.div`
  position: relative;
  width: 100%;
  white-space: nowrap;
`;
export const Col = styled.div`
  border: 1px solid red;
  height: 200vh;
  overflow: hidden;

  animation: ${animate1} 20s linear infinite;
  &:nth-of-type(2) {
    animation: ${animate2} 10s linear infinite;
  }

  & svg {
    width: 100%;
    height: 20vh;
    color: rgba(0, 0, 0, 0.2);
    transition: all 1s ease;

    &:hover {
      color: blue;
      filter: drop-shadow(10px 15px 12px red);
    }
  }
`;

export const IconRow = styled.div`
  /* animation: ${animate1} 80s linear infinite;
  animation-delay: -80s;
  &:nth-child(1) {
    animation: ${animate2} 80s linear infinite;
    animation-delay: -40s;
  } */
  height: 200%;

  & svg {
    font-size: 64px;
    color: rgba(0, 0, 0, 0.5);
    transition: all 1s ease;
    padding: 0 2px;
    cursor: pointer;

    &:hover {
      color: #0f0;
      text-shadow: 0 0 120px #0f0;
    }
  }
`;

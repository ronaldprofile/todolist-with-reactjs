import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #0a0a0b;
`;

export const Wrapper = styled.div`
  max-width: 1048px;
  padding: 2rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.8rem;
  }

  @media (max-width: 360px) {
    button {
      font-size: 1.4rem;
      img {
        display: none;
      }
    }
  }
`;

export const Main = styled.main`
  padding: 5.6rem 2.4rem;
  text-align: center;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ColorCycle = keyframes`

  0%, 55% {
    filter: brightness(0) invert(1);
  }

  11%, 33% { 
    filter: none;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 16rem;
  line-height: 16rem;
  letter-spacing: -1.24rem;

  color: #e1e1e6;

  span {
    padding: 0 0.67rem;
    filter: brightness(0) invert(1);

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${ColorCycle} 10s ease-in-out infinite;
  }

  span:nth-child(1) {
    background-image: linear-gradient(90deg, #0035a5, #0080ff);
  }

  span:nth-child(2) {
    background-image: linear-gradient(90deg, #7928ca, #ff0080);
    animation-delay: 3.33s;
  }

  span:nth-child(3) {
    background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
    animation-delay: 6.66s;
  }

  @media (max-width: 768px) {
    span {
      font-size: 12.8rem;
      line-height: 12.8rem;
    }
  }

  @media (max-width: 360px) {
    span {
      font-size: 8.3rem;
      line-height: 8.3rem;
      letter-spacing: -0.9rem;
    }
  }

  @media (max-width: 320px) {
    span {
      font-size: 7.4rem;
      line-height: 7.4rem;
      letter-spacing: -0.9rem;
    }
  }
`;

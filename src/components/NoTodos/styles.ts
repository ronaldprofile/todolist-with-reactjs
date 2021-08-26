import styled, { keyframes } from "styled-components";

const AnimationIllustration = keyframes`
  0% { transform: translateY(-5px)}
  50% { transform: translateY(10px)}
  100% { transform: translateY(-5px)}
`;

export const Container = styled.div`
  padding: 0 2rem;
  text-align: center;

  img {
    max-width: 400px;
    height: 350px;
    object-fit: contain;

    animation: ${AnimationIllustration} 4s linear infinite;
  }

  p {
    font-size: 1.7rem;
    font-weight: 700;

    color: #00004f;
  }
`;

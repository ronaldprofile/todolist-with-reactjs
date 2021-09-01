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
    max-width: 40rem;
    height: auto;
    object-fit: contain;

    animation: ${AnimationIllustration} 4s linear infinite;
  }

  p {
    font-size: 1.7rem;
    font-weight: 700;

    color: #00004f;
  }

  @media (max-width: 768px) {
    img {
      max-width: 30rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 360px) {
    margin-top: 3rem;

    img {
      max-width: 20rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

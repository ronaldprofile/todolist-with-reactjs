import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  min-height: 14rem;
  background-color: var(--primary-color);
`;

export const Container = styled.div`
  max-width: 920px;
  margin: -10rem auto 0;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 320px) and (max-width: 1023px) {
    max-width: 90%;
  }
`;

export const Heading = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Todos = styled.div`
  margin-top: 6rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const AnimationIllustration = keyframes`
  0% { transform: translateY(-5px)}
  50% { transform: translateY(10px)}
  100% { transform: translateY(-5px)}
`;

export const NoTodos = styled.div`
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

    color: var(--primary-color);
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

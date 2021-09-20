import styled, { keyframes } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  background: var(--background-overlay-modal);
`;

const animationModalContent = keyframes`
  from {
    transform: scale(0.6);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  width: 48rem;
  padding: 6.4rem 3.2rem;
  position: relative;

  display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: var(--black-one-color);
  border-radius: 5px;

  animation: ${animationModalContent} 0.3s ease;

  h2,
  p {
    color: var(--white);
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1.6rem;
    filter: brightness(0.9);
  }

  img {
    width: 4rem;
    height: 4rem;

    position: absolute;
    top: 1rem;
    right: 1rem;

    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: rotate(-90deg);
    }
  }

  form {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;

    gap: 1rem;

    input {
      width: 100%;
      border: 0;
      outline: none;
      background-color: var(--black-two-color);
      color: var(--white);

      transition: border 0.2s;

      &:focus {
        border: 2px solid var(--second-primary-color);
      }
    }
  }

  @media (max-width: 500px) {
    width: 90%;
  }

  @media (max-width: 360px) {
    text-align: left;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.4rem;
    }

    form {
      display: grid;
      grid-auto-flow: row;

      input,
      button {
        width: 100%;
      }
    }
  }
`;

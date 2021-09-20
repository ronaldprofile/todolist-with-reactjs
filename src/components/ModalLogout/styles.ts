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
  padding: 6.4rem 0;
  display: flex;
  flex-direction: column;
  background-color: var(--black-one-color);
  border-radius: 5px;

  animation: ${animationModalContent} 0.3s ease;

  h2 {
    margin-bottom: 3rem;
    font-size: 2.5rem;

    color: var(--white);
  }

  @media (max-width: 500px) {
    background: transparent;
    width: 100%;
    height: auto;

    h2 {
      font-size: 2rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  button {
    width: 14rem;
    height: 16rem;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    gap: 1.2rem;
  }

  button:last-child {
    background-color: var(--black-two-color);

    &:hover {
      background-color: var(--black-one-color);
    }
  }
`;

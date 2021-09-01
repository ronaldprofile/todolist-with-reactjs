import styled from "styled-components";

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
  background: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  padding: 6.4rem 3.2rem;
  position: relative;
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 5px;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1.6rem;
  }

  img {
    width: 4rem;
    height: 4rem;

    position: absolute;
    top: 1rem;
    right: 1rem;

    cursor: pointer;
  }

  form {
    margin-top: 3rem;
    display: grid;
    grid-auto-flow: column;

    gap: 1rem;

    input {
      border: 2px solid #eeeeee;
    }

    button {
      background-color: #00297f;
      color: #fff;

      border: 0;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(1.3);
      }
    }
  }

  @media (max-width: 360px) {
    width: 90%;
    text-align: left;

    h2 {
      font-size: 2.8rem;
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
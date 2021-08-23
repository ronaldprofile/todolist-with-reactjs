import styled from "styled-components";

export const Container = styled.div`
  margin-top: -3rem;

  form {
    display: flex;
    align-items: center;

    gap: 1.6rem;

    input {
      min-width: 50rem;
      height: 5rem;
      padding: 0 2rem;

      font-size: 1.6rem;
      outline: none;
      border-radius: 5px;
      border: 1px solid #e4e4e4;
    }

    button {
      flex: 1;
      height: 5rem;
      padding: 0 2rem;
      font-size: 1.6rem;
      font-weight: 700;

      background-color: #00297f;
      color: #fff;
      border-radius: 5px;
      border: 0;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(1.3);
      }
    }
  }
`;

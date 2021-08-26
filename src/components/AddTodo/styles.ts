import styled from "styled-components";

export const Container = styled.div`
  margin-top: -3rem;
  font-size: 1.6rem;

  form {
    display: flex;
    align-items: center;

    gap: 1.6rem;

    input {
      min-width: 50rem;
      outline: none;
      border: 1px solid #e4e4e4;
    }

    > button {
      flex: 1;
      font-weight: 700;
      background-color: #00297f;
      color: #fff;
      border: 0;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(1.3);
      }
    }
  }
`;

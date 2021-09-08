import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.6rem;

  form {
    > div {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      > input {
        width: 100%;
        outline: none;
        border: 1px solid #e4e4e4;
      }
    }
  }

  @media (max-width: 768px) {
    form {
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

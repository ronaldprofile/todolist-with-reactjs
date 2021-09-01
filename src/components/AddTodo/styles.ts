import styled from "styled-components";

export const Container = styled.div`
  margin-top: -3rem;
  font-size: 1.6rem;

  form {
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.6rem;

      > input {
        width: 100%;
        outline: none;
        border: 1px solid #e4e4e4;
      }
    }
  }

  @media (max-width: 360px) {
    form {
      font-size: 1.4rem;
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

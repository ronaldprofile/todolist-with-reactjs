import styled from "styled-components";

export const Container = styled.div`
  .todo {
    width: 100%;
    padding: 2rem;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1.6rem;
    font-weight: 500;
    background-color: #fff;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
      rgba(17, 17, 26, 0.1) 0px 0px 8px;

    &::before {
      content: "";
      width: 0.25rem;
      height: 0;

      position: absolute;
      top: 0;
      left: -1px;

      border-radius: 5px;
      background-color: #00297f;

      transition: height 0.2s;
    }

    &:hover::before {
      height: 100%;
    }

    > button {
      background: transparent;
      border: 0;
    }
  }
`;

import styled from "styled-components";

interface IContainerProps {
  isCompleted: boolean;
}

export const Container = styled.div<IContainerProps>`
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

  strong {
    text-decoration: ${props => props.isCompleted && "line-through"};
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1.8rem;
  }

  @media (max-width: 768px) {
    padding: 1.4rem;
    font-size: 1.6rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    strong {
      order: 1;
      text-align: center;
    }

    .actions {
      padding: 0.8rem 0;
      position: relative;

      &::after {
        content: "";

        position: absolute;
        bottom: 0;
        left: 0;

        height: 1px;
        width: 100%;
        background-color: #eeeeee;
      }
    }
  }

  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0;
    width: 4rem;
    height: 4rem;

    font-size: 0;
    background: transparent;
    border: 1px solid #eeeeee;

    transition: transform 0.2s;
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

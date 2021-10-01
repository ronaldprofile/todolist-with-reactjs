import styled, { css } from "styled-components";

interface IContainerProps {
  isCompleted: boolean;
  isDragging: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.6rem;
  font-weight: 500;
  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  cursor: grab;

  &::before {
    content: "";
    width: 0.25rem;
    height: 0;

    position: absolute;
    top: 0;
    left: -1px;

    border-radius: 5px;
    background-color: var(--second-primary-color);

    transition: height 0.2s;
  }

  &:hover::before {
    height: 100%;
  }

  strong {
    word-wrap: break-word;
    text-decoration: ${props => props.isCompleted && "line-through"};
    color: ${props => props.isCompleted && "var(--todo-completed-text)"};
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1.8rem;
  }

  ${props =>
    props.isDragging &&
    css`
      &:hover::before {
        height: 0;
      }

      border: 0.2rem dashed rgba(0, 0, 0, 0.3);
      background: transparent;
      cursor: grabbing;

      strong,
      .actions {
        opacity: 0;
      }
    `}

  @media (max-width: 360px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    strong {
      width: 100% !important;
      order: 1;
      word-wrap: normal;
    }

    .actions {
      width: 100%;
      padding: 0.8rem 0;
      position: relative;

      display: flex;
      justify-content: space-between;
      align-items: center;

      &::after {
        content: "";

        position: absolute;
        bottom: 0;
        left: 0;

        height: 1px;
        width: 100%;
        background-color: var(--gray);
      }
    }
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
    border: 1px solid var(--gray);

    transition: transform 0.2s;
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

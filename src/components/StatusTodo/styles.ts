import styled from "styled-components";

interface IStatusTodo {
  isCompleted: boolean;
}

export const Container = styled.span<IStatusTodo>`
  padding: 0.7rem 2.4rem;
  border-radius: 4rem;

  background-color: ${props =>
    props.isCompleted ? "var(--todo-completed)" : "var(--todo-in-progress)"};

  color: ${props =>
    props.isCompleted ? "var(--red-rgba)" : "var(--green-rgba)"};

  @media (max-width: 360px) {
    padding: 0.4rem 1rem;
  }
`;

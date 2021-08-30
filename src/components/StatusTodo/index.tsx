import { Container } from "./styles";

interface IStatusTodo {
  isCompleted: boolean;
}

export function StatusTodo({ isCompleted }: IStatusTodo) {
  return (
    <Container isCompleted={isCompleted}>
      {isCompleted ? "Completed" : "In progress"}
    </Container>
  );
}

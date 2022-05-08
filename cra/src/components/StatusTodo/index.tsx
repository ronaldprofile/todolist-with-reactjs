import { Container } from "./styles";

interface IStatusTodoProps {
  isCompleted: boolean;
}

export function StatusTodo({ isCompleted }: IStatusTodoProps) {
  return (
    <Container isCompleted={isCompleted}>
      {isCompleted ? "Completed" : "In progress"}
    </Container>
  );
}

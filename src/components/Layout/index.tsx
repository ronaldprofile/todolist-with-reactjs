import { AddTodo } from "../AddTodo";
import { Todos } from "../Todos";
import { Container, Header } from "./styles";

export function Layout() {
  return (
    <div>
      <Header />
      <Container>
        <AddTodo />
        <Todos />
      </Container>
    </div>
  );
}

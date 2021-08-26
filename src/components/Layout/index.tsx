import { useState } from "react";
import { AddTodo } from "../AddTodo";
import { Todos } from "../Todos";
import { Todo } from "../Todo";
import { NoTodos } from "../NoTodos";

import { Container, Header } from "./styles";
interface ICurrentTodoState {
  id: number;
  content: string;
}

export function Layout() {
  const [currentTodo, setCurrentTodo] = useState<ICurrentTodoState[]>([]);

  function addTodoOnState(todo: ICurrentTodoState) {
    setCurrentTodo([...currentTodo, todo]);
  }

  return (
    <div>
      <Header />
      <Container>
        <AddTodo addTodoOnState={addTodoOnState} />

        {currentTodo.length <= 0 && <NoTodos />}

        <Todos>
          {currentTodo.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </Todos>
      </Container>
    </div>
  );
}

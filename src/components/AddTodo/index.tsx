import { useState } from "react";
import { Container } from "./styles";

export function AddTodo() {
  const [todo, setTodo] = useState("");

  function saveTodo() {
    console.log(todo);

    setTodo("");
  }

  return (
    <Container>
      <form onSubmit={saveTodo}>
        <div>
          <label htmlFor="task" className="sr-only">
            Digite sua nova tarefa
          </label>
          <input
            type="text"
            id="task"
            placeholder="Digite sua tarefa"
            autoFocus
            onChange={event => setTodo(event.target.value)}
            value={todo}
          />
        </div>

        <button type="submit">Adicionar</button>
      </form>
    </Container>
  );
}

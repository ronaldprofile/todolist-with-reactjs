import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AddTodo } from "../AddTodo";
import { Todos } from "../Todos";
import { Todo } from "../Todo";
import { NoTodos } from "../NoTodos";

import { Container, Header } from "./styles";
interface ICurrentTodoState {
  content: string;
  isCompleted: boolean;
  key: string;
}

export function Layout() {
  const [todos, setTodos] = useState<ICurrentTodoState[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("@todo.l")!);

    if (data) setTodos(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("@todo.l", JSON.stringify(todos));
  }, [todos]);

  function addTodoOnState(todo: ICurrentTodoState) {
    setTodos([...todos, todo]);
  }

  function editTodo(key: string) {
    const filteredTodo = todos.map(todo => {
      return todo.key === key ? { ...todo, content: "Outra coisa sabe" } : todo;
    });

    console.log(filteredTodo);
  }

  function markTodoAsCompleted(key: string) {
    const filteredTodo = todos.map(todo => {
      return todo.key === key ? { ...todo, isCompleted: true } : todo;
    });

    setTodos(filteredTodo);
    toast.success("Tarefa concluída com sucesso");
  }

  function deleteTodo(key: string) {
    const filteredTodo = todos.filter(todo => todo.key !== key);

    setTodos(filteredTodo);
    toast.success("Tarefa deletada com sucesso");
  }

  return (
    <div>
      <Header />
      <Container>
        <AddTodo addTodoOnState={addTodoOnState} />

        {todos.length <= 0 && <NoTodos />}

        <Todos>
          {todos.map(todo => (
            <Todo
              key={todo.key}
              todo={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              markTodoAsCompleted={markTodoAsCompleted}
            />
          ))}
        </Todos>
      </Container>
    </div>
  );
}

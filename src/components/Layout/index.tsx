import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

import { AddTodo } from "../AddTodo";
import { Todo } from "../Todo";
import { NoTodos } from "../NoTodos";
import { Modal } from "../Modal";
import { Logo } from "../Logo";
import { Profile } from "../Profile";

import { Container, Header, Heading, Todos } from "./styles";

interface ICurrentTodoState {
  content: string;
  isCompleted: boolean;
  key: string;
}

export function Layout() {
  const [todos, setTodos] = useState<ICurrentTodoState[]>([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentKeyTodoHasModalEditOpen, setCurrentKeyTodoHasModalEditOpen] =
    useState("");

  const { user } = useAuth();

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

  function editTodo(keyTodo: string, newValue: string) {
    const filteredTodo = todos.map(todo => {
      return todo.key === keyTodo ? { ...todo, content: newValue } : todo;
    });

    setTodos(filteredTodo);
  }

  function markTodoAsCompleted(keyTodo: string) {
    const filteredTodo = todos.map(todo => {
      return todo.key === keyTodo ? { ...todo, isCompleted: true } : todo;
    });

    setTodos(filteredTodo);
    toast.success("Tarefa concluída com sucesso");
  }

  function deleteTodo(keyTodo: string) {
    const filteredTodo = todos.filter(todo => todo.key !== keyTodo);

    setTodos(filteredTodo);
    toast.success("Tarefa deletada com sucesso");
  }

  function openModal(keyTodo: string) {
    setIsModalActive(true);
    setCurrentKeyTodoHasModalEditOpen(keyTodo);
  }

  function closeModal() {
    setIsModalActive(false);
  }

  return (
    <>
      <Header />
      <Container>
        <Heading>
          <Logo />
          <Profile user={user} />
        </Heading>
        <AddTodo addTodoOnState={addTodoOnState} />

        {todos.length <= 0 && <NoTodos />}

        <Todos>
          {todos.map(todo => (
            <Todo
              key={todo.key}
              todo={todo}
              deleteTodo={deleteTodo}
              markTodoAsCompleted={markTodoAsCompleted}
              openModal={openModal}
            />
          ))}
        </Todos>

        {isModalActive && (
          <Modal
            keyTodo={currentKeyTodoHasModalEditOpen}
            editTodo={editTodo}
            closeModal={closeModal}
          />
        )}
      </Container>
    </>
  );
}

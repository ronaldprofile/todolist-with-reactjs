import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

import { AddTodo } from "../../components/AddTodo";
import { Todo } from "../../components/Todo";
import { Logo } from "../../components/Logo";
import { Profile } from "../../components/Profile";
import { ModalEdit } from "../../components/ModalEdit";
import { ModalLogout } from "../../components/ModalLogout";

import illustrationAstronaut from "../../images/astronaut.svg";
import { Container, Header, Heading, NoTodos, Todos } from "./styles";

interface ITodo {
  content: string;
  isCompleted: boolean;
  key: string;
}

export function Dashboard() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const { user } = useAuth();

  const [isModalEditActive, setIsModalEditActive] = useState(false);
  const [isModalLogoutActive, setIsModalLogoutActive] = useState(false);
  const [whichTaskShouldUpdate, setWhichTaskShouldUpdate] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("@todo.l")!);

    if (data) setTodos(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("@todo.l", JSON.stringify(todos));
  }, [todos]);

  function addTodoOnState(todo: ITodo) {
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

  function openModalEdit(keyTodo: string) {
    setIsModalEditActive(true);
    setWhichTaskShouldUpdate(keyTodo);
  }

  return (
    <>
      <Header />
      <Container>
        <Heading>
          <Logo />
          <Profile
            user={user}
            setIsModalLogoutActive={setIsModalLogoutActive}
          />
        </Heading>
        <AddTodo addTodoOnState={addTodoOnState} />

        {todos.length <= 0 && (
          <NoTodos>
            <img src={illustrationAstronaut} alt="astronaut illustration" />
            <p>
              Nenhuma tarefa por aqui...
              <br />
              comece adicionando sua primeira tarefa.
            </p>
          </NoTodos>
        )}

        <Todos>
          {todos.map(todo => (
            <Todo
              key={todo.key}
              todo={todo}
              deleteTodo={deleteTodo}
              markTodoAsCompleted={markTodoAsCompleted}
              openModalEdit={openModalEdit}
            />
          ))}
        </Todos>

        {isModalEditActive && (
          <ModalEdit
            keyTodo={whichTaskShouldUpdate}
            editTodo={editTodo}
            closeModalEdit={setIsModalEditActive}
          />
        )}

        {isModalLogoutActive && (
          <ModalLogout setIsModalLogout={setIsModalLogoutActive} />
        )}
      </Container>
    </>
  );
}

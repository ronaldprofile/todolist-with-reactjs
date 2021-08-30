import { useState, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "./styles";
interface ITodo {
  content: string;
  isCompleted: false;
  key: string;
}
interface IAddTodoProps {
  addTodoOnState: (todo: ITodo) => void;
}

export function AddTodo({ addTodoOnState }: IAddTodoProps) {
  const [inputValue, setInputValue] = useState("");

  function handleForm(event: FormEvent) {
    event.preventDefault();

    if (inputValue.trim() === "") {
      toast.error("Por favor preencha o campo");
      return;
    }

    addTodoOnState({
      content: inputValue,
      isCompleted: false,
      key: uuidv4()
    });

    toast.success("Tarefa adicionada com sucesso");
    setInputValue("");
  }

  return (
    <Container>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="task" className="sr-only">
            Digite sua tarefa
          </label>
          <input
            type="text"
            id="task"
            placeholder="Digite sua tarefa"
            autoFocus
            onChange={event => setInputValue(event.target.value)}
            value={inputValue}
          />
        </div>

        <button type="submit">Adicionar</button>
      </form>
      <ToastContainer />
    </Container>
  );
}

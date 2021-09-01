import { ModalOverlay, ModalContent } from "./styles";

import closeIcon from "../../images/close.svg";
import { FormEvent, useState } from "react";
import { Button } from "../Button";

interface IModalProps {
  closeModal: () => void;
  editTodo: (key: string) => void;
}

export function Modal({ closeModal }: IModalProps) {
  const [newTodo, setNewTodo] = useState("");

  function handleForm(event: FormEvent) {
    event.preventDefault();

    if (newTodo.trim() === "") {
      alert("Preencha o campo!");
      return;
    }
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Editar tarefa</h2>
        <p>Tem certeza que deseja editar essa tarefa?</p>
        <img onClick={closeModal} src={closeIcon} alt="close icon" />

        <form onSubmit={handleForm}>
          <div>
            <label htmlFor="newTodo" className="sr-only">
              Digite sua nova atualização
            </label>
            <input
              type="text"
              id="newTodo"
              placeholder="Digite sua nova atualização"
              value={newTodo}
              onChange={event => setNewTodo(event.target.value)}
            />
          </div>
          <Button>Sim, editar</Button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}

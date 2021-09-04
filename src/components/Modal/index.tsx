import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../Button";

import closeIcon from "../../images/close.svg";
import { ModalOverlay, ModalContent } from "./styles";
interface IModalProps {
  keyTodo: string;
  editTodo: (key: string, newValue: string) => void;
  closeModal: () => void;
}

export function Modal({ closeModal, editTodo, keyTodo }: IModalProps) {
  const [newTodo, setNewTodo] = useState("");

  function handleForm(event: FormEvent) {
    event.preventDefault();

    if (newTodo.trim() === "") {
      toast.error("Por favor preencha o campo");
      return;
    }

    editTodo(keyTodo, newTodo);
    toast.success("Sua tarefa foi editada com sucesso");
    closeModal();
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

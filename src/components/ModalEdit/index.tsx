import { useState, FormEvent } from "react";
import { Button } from "../Button";

import { toast } from "react-toastify";
import closeIcon from "../../images/close.svg";

import { ModalOverlay, ModalContent } from "./styles";

interface IModalEditProps {
  keyTodo: string;
  editTodo: (key: string, newValue: string) => void;
  closeModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalEdit({
  closeModalEdit,
  editTodo,
  keyTodo
}: IModalEditProps) {
  const [updateTodo, setUpdateTodo] = useState("");

  function handleForm(event: FormEvent) {
    event.preventDefault();

    if (updateTodo.trim() === "") {
      toast.error("Por favor preencha o campo");
      return;
    }

    editTodo(keyTodo, updateTodo);
    setUpdateTodo("");

    toast.success("Sua tarefa foi editada com sucesso");
    closeModalEdit(false);
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Editar tarefa</h2>
        <p>Tem certeza que deseja editar essa tarefa?</p>
        <img
          onClick={() => closeModalEdit(false)}
          src={closeIcon}
          alt="close icon"
        />

        <form onSubmit={handleForm}>
          <div>
            <label htmlFor="newTodo" className="sr-only">
              Digite sua nova atualização
            </label>
            <input
              type="text"
              id="newTodo"
              placeholder="Digite sua nova atualização"
              value={updateTodo}
              onChange={event => setUpdateTodo(event.target.value)}
              autoComplete="off"
            />
          </div>
          <Button>Sim, editar</Button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}

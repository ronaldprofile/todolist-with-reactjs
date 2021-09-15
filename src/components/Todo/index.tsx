import checkIcon from "../../images/check.svg";
import editIcon from "../../images/edit.svg";
import trashIcon from "../../images/trash.svg";

import { StatusTodo } from "../StatusTodo";
import { Container, Buttons } from "./styles";

interface ITodo {
  content: string;
  isCompleted: boolean;
  key: string;
}

interface ITodoProps {
  todo: ITodo;
  markTodoAsCompleted: (todoKey: string) => void;
  deleteTodo: (todoKey: string) => void;
  openModalEdit: (todoKey: string) => void;
}

export function Todo({
  todo,
  markTodoAsCompleted,
  deleteTodo,
  openModalEdit
}: ITodoProps) {
  return (
    <Container isCompleted={todo.isCompleted}>
      <strong>{todo.content}</strong>

      <div className="actions">
        <StatusTodo isCompleted={todo.isCompleted} />

        <Buttons>
          {todo.isCompleted ? (
            <button onClick={() => deleteTodo(todo.key)} title="excluir tarefa">
              <img src={trashIcon} alt="trash icon" />
            </button>
          ) : (
            <>
              <button
                onClick={() => openModalEdit(todo.key)}
                title="editar tarefa"
              >
                <img src={editIcon} alt="edit icon" />
              </button>

              <button
                onClick={() => deleteTodo(todo.key)}
                title="excluir tarefa"
              >
                <img src={trashIcon} alt="trash icon" />
              </button>
              <button
                onClick={() => markTodoAsCompleted(todo.key)}
                title="marcar como concluída"
              >
                <img src={checkIcon} alt="check icon" />
              </button>
            </>
          )}
        </Buttons>
      </div>
    </Container>
  );
}

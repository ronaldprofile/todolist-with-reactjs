import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
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
  indexTodo: number;
  moveListItem: (from: number, to: number) => void;
  markTodoAsCompleted: (todoKey: string) => void;
  deleteTodo: (todoKey: string) => void;
  openModalEdit: (todoKey: string) => void;
}

interface IItemDraggedProps {
  id: string;
  indexTodo: number;
}

export function Todo({
  todo,
  indexTodo,
  moveListItem,
  markTodoAsCompleted,
  deleteTodo,
  openModalEdit
}: ITodoProps) {
  const refTodo = useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { id: todo.key, indexTodo },

    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item: IItemDraggedProps, monitor) {
      const draggedIndex = item.indexTodo;
      const targetIndex = indexTodo;

      if (draggedIndex === targetIndex) {
        return;
      }
      // @ts-ignore: Object is possibly 'null'.
      const targetSize = refTodo.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset!.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      moveListItem(draggedIndex, targetIndex);
      item.indexTodo = targetIndex;
    }
  });

  dragRef(dropRef(refTodo));

  return (
    <Container
      ref={refTodo}
      isDragging={isDragging}
      isCompleted={todo.isCompleted}
    >
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

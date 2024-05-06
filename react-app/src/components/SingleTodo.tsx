import React, { useEffect, useRef, useState } from "react";
import { ToDo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import { Draggable } from "react-beautiful-dnd";

interface SingleTodoProps {
  index: number;
  todo: ToDo;
  arrayOfToDos: ToDo[];
  setArrayOfToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const SingleTodo = ({
  index,
  todo,
  arrayOfToDos,
  setArrayOfToDos,
}: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(todo.toDo);

  const handleDone = (id: number) => {
    setArrayOfToDos(
      arrayOfToDos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setArrayOfToDos(arrayOfToDos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setArrayOfToDos(
      arrayOfToDos.map((todo) =>
        todo.id === id ? { ...todo, todo: editToDo } : todo
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`todos_single ${snapshot.isDragging ? "drag" : ""}`}
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              value={editToDo}
              onChange={(e) => setEditToDo(e.target.value)}
              className="todos_single--text"
            />
          ) : todo.isDone ? (
            <s className="todos_single--text">{todo.toDo}</s>
          ) : (
            <span className="todos_single--text">{todo.toDo}</span>
          )}
          <div>
            <span
              className="icon"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span className="icon">
              <AiFillDelete onClick={() => handleDelete(todo.id)} />
            </span>
            <span className="icon">
              <MdDone onClick={() => handleDone(todo.id)} />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;

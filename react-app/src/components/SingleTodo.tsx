import React, { useEffect, useRef, useState } from "react";
import { ToDo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface SingleTodoProps {
  todo: ToDo;
  arrayOfToDos: ToDo[];
  setArrayOfToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const SingleTodo = ({
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
    <form className="todos_single" onSubmit={(e) => handleEdit(e, todo.id)}>
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
  );
};

export default SingleTodo;

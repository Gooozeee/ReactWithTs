import React from "react";
import "./styles.css";
import { ToDo } from "./model";
import SingleTodo from "./SingleTodo";

interface ToDoListProps {
  arrayOfToDos: ToDo[];
  setArrayOfToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList = ({ arrayOfToDos, setArrayOfToDos }: ToDoListProps) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos_heading">Active Tasks</span>
        {arrayOfToDos.map((todo) => (
          <SingleTodo
            todo={todo}
            arrayOfToDos={arrayOfToDos}
            key={todo.id}
            setArrayOfToDos={setArrayOfToDos}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos_heading">Completed Tasks</span>
        {arrayOfToDos.map((todo) => (
          <SingleTodo
            todo={todo}
            arrayOfToDos={arrayOfToDos}
            key={todo.id}
            setArrayOfToDos={setArrayOfToDos}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;

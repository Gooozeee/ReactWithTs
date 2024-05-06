import React from "react";
import "./styles.css";
import { ToDo } from "./model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface ToDoListProps {
  arrayOfToDos: ToDo[];
  setArrayOfToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  completedTodos: ToDo[];
  setCompletedToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList = ({
  arrayOfToDos,
  setArrayOfToDos,
  completedTodos,
  setCompletedToDos,
}: ToDoListProps) => {
  return (
    <div className="container">
      <Droppable droppableId="ToDoActiveItems">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Active Tasks</span>
            {arrayOfToDos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                arrayOfToDos={arrayOfToDos}
                key={todo.id}
                setArrayOfToDos={setArrayOfToDos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="CompletedToDos">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${
              snapshot.isDraggingOver ? "dragcomplete" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                arrayOfToDos={completedTodos}
                key={todo.id}
                setArrayOfToDos={setCompletedToDos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ToDoList;

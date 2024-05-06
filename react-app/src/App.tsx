import { useState } from "react";
import InputField from "./components/InputField";
import { ToDo } from "./components/model";
import ToDoList from "./components/ToDoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  const [toDo, setToDo] = useState<string>("");
  const [arrayOfToDos, setArrayOfToDos] = useState<ToDo[]>([]);
  const [completedToDos, setCompletedToDos] = useState<ToDo[]>([]);

  const handleAddToDo = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo) {
      setArrayOfToDos([
        ...arrayOfToDos,
        { id: Date.now(), toDo: toDo, isDone: false },
      ]);
      setToDo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = arrayOfToDos;
    let complete = completedToDos;

    if (source.droppableId === "ToDoActiveItems") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "ToDoActiveItems") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedToDos(complete);
    setArrayOfToDos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1 className="heading">TaskList</h1>
        <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAddToDo} />
        <ToDoList
          arrayOfToDos={arrayOfToDos}
          setArrayOfToDos={setArrayOfToDos}
          completedTodos={completedToDos}
          setCompletedToDos={setCompletedToDos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;

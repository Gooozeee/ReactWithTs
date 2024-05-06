import { useState } from "react";
import InputField from "./components/InputField";
import { ToDo } from "./components/model";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDo, setToDo] = useState<string>("");
  const [arrayOfToDos, setArrayOfToDos] = useState<ToDo[]>([]);

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

  return (
    <div className="App">
      <h1 className="heading">TaskList</h1>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAddToDo} />
      <ToDoList arrayOfToDos={arrayOfToDos} setArrayOfToDos={setArrayOfToDos}/>
    </div>
  );
}

export default App;

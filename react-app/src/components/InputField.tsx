import React, { useRef } from "react";
import "./styles.css";

interface InputFieldProps {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ toDo, setToDo, handleAdd }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
    }}>
      <input
        ref={inputRef}
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className="input_box"
      />
      <button
        type="button"
        className="input_submit"
        onClick={(e) => handleAdd(e)}
      >
        Go
      </button>
    </form>
  );
};

export default InputField;

import * as React from "react";
import { useState, ChangeEvent, FormEvent } from "react";

type AddTodo = (newTodo: string) => void;

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input className="input" type="text" value={newTodo} onChange={handleChange} />
      <button className="button"type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;

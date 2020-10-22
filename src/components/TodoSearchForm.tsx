import * as React from "react";
import { useState, ChangeEvent, FormEvent } from "react";

//type SearchTodo = (searchTodo: string) => void;

interface TodoFormProps {
  searchTodo: SearchTodo;
}

export const TodoSearchForm: React.FC<TodoFormProps> = ({ searchTodo }) => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchTodo(search);
  };

  return (
    <form>
      <input className="input" type="text" value={search} onChange={handleChange} />
      <button className="button" type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default TodoSearchForm;

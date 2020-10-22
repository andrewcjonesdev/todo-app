import * as React from "react";
import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoSearchForm from "./components/TodoSearchForm";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([
    {
      id: 0,
      text: "Do washing up",
      complete: false,
    },
    {
      id: 1,
      text: "Do laundry",
      complete: false,
    },
    {
      id: 2,
      text: "Wash the car",
      complete: false,
    },
    {
      id: 3,
      text: "Go shopping",
      complete: false,
    },
  ]);
  const [search, setSearch] = useState("");

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteItem: DeleteItem = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      return { ...todo };
    });
    updatedTodos.forEach(function (item, index) {
      if (item.id == selectedTodo.id) {
        updatedTodos.splice(index, 1);
      }
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([
        ...todos,
        { id: todos.length, text: newTodo, complete: false },
      ]);
  };

  const searchTodo: SearchTodo = (searchTodo) => {
    setSearch(searchTodo);
  };

  return (
    <React.Fragment>
      <div className="todoBox">
        <TodoSearchForm searchTodo={searchTodo} />
        <TodoList
          search={search}
          todos={todos}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
        />
        <TodoForm addTodo={addTodo} />
      </div>
    </React.Fragment>
  );
};

export default TodoApp;

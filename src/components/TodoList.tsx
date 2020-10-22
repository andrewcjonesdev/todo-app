import * as React from "react";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Array<Todo>;
  search: string;
  toggleComplete: ToggleComplete;
  deleteItem: DeleteItem;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  search,
  toggleComplete,
  deleteItem,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        if (todo.text.toLowerCase().includes(search.toLowerCase())) {
          return (
            <TodoItem
              key={todo.text}
              todo={todo}
              //search={search}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
            />
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

export default TodoList;

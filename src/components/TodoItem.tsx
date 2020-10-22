import * as React from "react";

interface TodoListItemProps {
  //search: string;
  todo: Todo;
  toggleComplete: ToggleComplete;
  deleteItem: DeleteItem;
}

export const TodoItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  deleteItem,
}) => {
  return (
    <li>
      <input
        className="todoItem"
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
      />
      {todo.text}
      <button className="button" onClick={() => deleteItem(todo)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

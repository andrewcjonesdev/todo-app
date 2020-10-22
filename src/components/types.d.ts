type Todo = {
    id:number,
    text: string;
    complete: boolean;
  };
  
type ToggleComplete = (selectedTodo: Todo) => void;
type DeleteItem = (selectedTodo: Todo) => void;
  
type AddTodo = (newTodo: string) => void;
type SearchTodo = (searchTodo: string) => void;

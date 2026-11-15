import { useState, type ReactNode } from "react";
import { TodosContext, useTodosContext, type Todo } from "./todosContext";

const initialTodos: Todo[] = [
  { id: "1", title: "Learn React context" },
  { id: "2", title: "Build a todo list" },
];

function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (title: string) => {
    setTodos([...todos, { id: Date.now().toString(), title }]);
  };

  const updateTodo = (id: string, title: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

function TodoForm() {
  const { addTodo } = useTodosContext();
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    addTodo(trimmed);
    setTitle("");
  };

  return (
    <div className="mb-2 flex gap-2">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New todo"
        className="block w-full rounded border border-neutral-300 px-3 py-1.5"
        id="wd-context-todo-title"
      />
      <button
        type="button"
        onClick={handleAdd}
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        id="wd-context-todo-add"
      >
        Add
      </button>
    </div>
  );
}

function TodoItem({ todo }: { todo: Todo }) {
  const { updateTodo, deleteTodo } = useTodosContext();
  return (
    <li className="mb-2 flex gap-2">
      <input
        value={todo.title}
        onChange={(e) => updateTodo(todo.id, e.target.value)}
        aria-label={`Edit todo ${todo.id}`}
        className="block w-full rounded border border-neutral-300 px-3 py-1.5"
      />
      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Delete
      </button>
    </li>
  );
}

function TodoList() {
  const { todos } = useTodosContext();
  return (
    <ul className="list-none p-0">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default function ReactContextTodoList() {
  return (
    <div id="wd-context-todo-list" className="max-w-xl">
      <h3>Todo List</h3>
      <TodosProvider>
        <TodoForm />
        <TodoList />
      </TodosProvider>
    </div>
  );
}

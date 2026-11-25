"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithRemoteArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "Task 1",
    description: "",
    completed: false,
  });
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" href={API}
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <div className="flex items-center gap-2">
        <a id="wd-retrieve-todo-by-id" href={`${API}/${todo.id}`}
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
          Get Todo by ID
        </a>
        <input id="wd-todo-id" value={todo.id}
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
          onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      </div>
      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" href={`${API}?completed=true`}
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" href={`${API}/create`}
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
        Create Todo
      </a>
      <h4>Removing from an Array</h4>
      <a id="wd-remove-todo" href={`${API}/${todo.id}/delete`}
        className="rounded bg-red-600 px-3 py-1.5 text-sm text-white">
        Remove Todo with ID = {todo.id}
      </a>
      <h4>Updating an Item in an Array</h4>
      <div className="mb-1 flex items-center gap-2">
        <a href={`${API}/${todo.id}/title/${todo.title}`} id="wd-update-todo-title"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
          Update Todo
        </a>
        <input value={todo.id}
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
          onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
        <input value={todo.title}
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      </div>
      <div className="mb-1 flex items-center gap-2">
        <a href={`${API}/${todo.id}/completed/${todo.completed}`} id="wd-update-todo-completed"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
          Complete Todo ID = {todo.id}
        </a>
        <input type="checkbox" checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
      </div>
      <div className="flex items-center gap-2">
        <a href={`${API}/${todo.id}/description/${todo.description}`} id="wd-update-todo-description"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
          Describe Todo ID = {todo.id}
        </a>
        <input value={todo.description}
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
      </div>
    </div>
  );
}

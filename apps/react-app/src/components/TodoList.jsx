import React, { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodoItem() {
    if (!input.trim()) return;

    const item = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos((prev) => [...prev, item]);
    setInput("");
  }

  function toggleCompleted(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter((prev) => prev.id !== id));
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter todo"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addTodoItem}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            <span className={todo.completed ? "striked" : ""}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

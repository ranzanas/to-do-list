import { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoDisplay from "./components/TodoDisplay";

function App() {
  // load todos from localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodoText) => {
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <TodoDisplay todos={todos} />
    </>
  );
}

export default App;

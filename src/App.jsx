import { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoDisplay from "./components/TodoDisplay";

function App() {
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
      done: false,
    };

    setTodos([...todos, newTodo]);
  };
  const toggleDone = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteDoneTasks = () => {
    const confirmDelete = window.confirm("Delete all completed tasks?");
    if (!confirmDelete) return;

    const remaining = todos.filter((todo) => !todo.done);
    setTodos(remaining);
  };

  const deleteAllTasks = () => {
    const confirmDelete = window.confirm("Delete ALL tasks?");
    if (!confirmDelete) return;

    setTodos([]);
  };
  const deleteTodo = (id) => {
    const confirmed = window.confirm("Delete this task?");
    confirmed ? setTodos(todos.filter((todo) => todo.id !== id)) : null;
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <TodoDisplay
        todos={todos}
        toggleDone={toggleDone}
        deleteDoneTasks={deleteDoneTasks}
        deleteAllTasks={deleteAllTasks}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoDisplay from "./components/TodoDisplay";

function App() {
  //Todo List (loaded from localStorage on first render
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  //Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ADD A NEW TODO
  const addTodo = (newTodoText) => {
    const newTodo = {
      id: Date.now(), // Unique ID using timestamp
      text: newTodoText,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  // CHECKBOX FUNCTIONALITY
  const toggleDone = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // DELETE ONLY COMPLETED TASKS
  const deleteDoneTasks = () => {
    const confirmDelete = window.confirm("Delete all completed tasks?");
    if (!confirmDelete) return;

    // Keep only those tasks that are NOT done
    const remaining = todos.filter((todo) => !todo.done);
    setTodos(remaining);
  };

  // DELETE ALL TASKS
  const deleteAllTasks = () => {
    const confirmDelete = window.confirm("Delete ALL tasks?");
    if (!confirmDelete) return;
    setTodos([]);
  };

  // DELETE SINGLE TASK
  const deleteTodo = (id) => {
    const confirmed = window.confirm("Delete this task?");
    confirmed ? setTodos(todos.filter((todo) => todo.id !== id)) : null;
  };

  // EDIT UPDATE TASK TEXT
  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText }; // Update text
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

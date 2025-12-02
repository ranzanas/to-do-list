import "../App.css";
import bookSolid from "../assets/bookSolid.svg";
import { useState, useEffect } from "react";

export default function TodoInput() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    const newTodos = [...todos, inputValue];
    setTodos(newTodos);
    setInputValue("");
  };

  return (
    <div className="todoInput">
      <h1 className="todoInput__title">TodoInput</h1>

      <form className="todoInput__inputMainBox" onSubmit={handleSubmit}>
        <div className="todoInput__inputSection">
          <span className="todoInput__iconBox">
            <img src={bookSolid} alt="book icon" className="todoInput__icon" />
          </span>

          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="todoInput__inputBox"
            placeholder="New Todo"
          />
        </div>

        <button className="todoInput__btn">Add new task</button>
      </form>
    </div>
  );
}

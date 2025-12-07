import "../App.css";
import bookSolid from "../assets/bookSolid.svg";
import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return alert("Please add todo");

    addTodo(text);
    setText("");
  };

  return (
    <div className="todoInput">
      <h1 className="todoInput__title">TodoInput</h1>

      <form className="todoInput__inputMainBox" onSubmit={handleSubmit}>
        <div className="todoInput__inputSection">
          <span className="todoInput__iconBox">
            <img src={bookSolid} alt="icon" className="todoInput__icon" />
          </span>

          <input
            type="text"
            className="todoInput__inputBox"
            placeholder="New Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button className="todoInput__btn">Add new task</button>
      </form>
    </div>
  );
}

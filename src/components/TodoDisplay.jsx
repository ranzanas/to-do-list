import "../App.css";
import { useState } from "react";
import penSolid from "../assets/penSolid.svg";
import trashSolid from "../assets/trashSolid.svg";

export default function TodoDisplay({
  todos,
  toggleDone,
  deleteDoneTasks,
  deleteAllTasks,
  deleteTodo,
}) {
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") {
      return todo.done;
    } else if (filter === "todo") {
      return !todo.done;
    }
    return true;
  });

  return (
    <div className="todoList">
      <h1 className="todoList__title">TodoList</h1>

      <div className="todoList__filters">
        <button
          className="todoList__filterBtn"
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className="todoList__filterBtn"
          onClick={() => setFilter("done")}
        >
          Done
        </button>

        <button
          className="todoList__filterBtn"
          onClick={() => setFilter("todo")}
        >
          Todo
        </button>
      </div>

      <div className="todoList__items">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="todoList__item">
            <p
              className={
                todo.done
                  ? "todoList__text todoList__text--done"
                  : "todoList__text"
              }
            >
              {todo.text}
            </p>

            <div className="todoList__actions">
              <input
                type="checkbox"
                className="todoList__checkbox"
                checked={todo.done}
                onChange={() => toggleDone(todo.id)}
              />

              <button className="todoList__iconBtn">
                <img src={penSolid} alt="edit" />
              </button>

              <button
                className="todoList__deleteBtn"
                onClick={() => deleteTodo(todo.id)}
              >
                <img src={trashSolid} alt="delete" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="todoList__bottomBtns">
        <button className="todoList__clearDone" onClick={deleteDoneTasks}>
          Delete done tasks
        </button>
        <button className="todoList__clearAll " onClick={deleteAllTasks}>
          Delete all tasks
        </button>
      </div>
    </div>
  );
}

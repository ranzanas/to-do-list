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
  editTodo,
}) {
  const [filter, setFilter] = useState("all");

  const [editingId, setEditingId] = useState(null); // Which todo is being edited
  const [editText, setEditText] = useState(""); // Text inside edit input

  //Handles the filtering of the display buttons
  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "todo") return !todo.done;
    return true;
  });

  // Start editing todo
  const startEditing = (todo) => {
    if (todo.done) return;
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Finish editing todo

  const finishEditing = (id) => {
    if (editText.trim() === "") return;
    editTodo(id, editText.trim());
    setEditingId(null);
  };

  return (
    <div className="todoList">
      <h1 className="todoList__title">TodoList</h1>

      {/*Filtering buttons*/}
      <div className="todoList__filters">
        <button
          onClick={() => setFilter("all")}
          className="todoList__filterBtn"
        >
          All
        </button>
        <button
          onClick={() => setFilter("done")}
          className="todoList__filterBtn"
        >
          Done
        </button>
        <button
          onClick={() => setFilter("todo")}
          className="todoList__filterBtn"
        >
          Todo
        </button>
      </div>

      {/*display the todo items*/}
      <div className="todoList__items">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="todoList__item">
            {editingId === todo.id ? (
              <input
                className="todoList__editInput"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && finishEditing(todo.id)}
                autoFocus
              />
            ) : (
              <p
                className={
                  todo.done
                    ? "todoList__text todoList__text--done"
                    : "todoList__text"
                }
              >
                {todo.text}
              </p>
            )}

            <div className="todoList__actions">
              <input
                type="checkbox"
                className="todoList__checkbox"
                checked={todo.done}
                onChange={() => toggleDone(todo.id)}
              />

              <button
                className="todoList__iconBtn"
                onClick={() => startEditing(todo)}
                disabled={todo.done}
              >
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

      {/* Bottom buttons */}
      <div className="todoList__bottomBtns">
        <button className="todoList__clearDone" onClick={deleteDoneTasks}>
          Delete done tasks
        </button>

        <button className="todoList__clearAll" onClick={deleteAllTasks}>
          Delete all tasks
        </button>
      </div>
    </div>
  );
}

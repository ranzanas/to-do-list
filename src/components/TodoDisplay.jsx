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

  // FILTER TODOS BASED ON FILTER STATE
  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "todo") return !todo.done;
    return true;
  });

  // START EDITING A TODO
  const startEditing = (todo) => {
    if (todo.done) return;
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // FINISH EDITING ON ENTER KEY
  const finishEditing = (id) => {
    if (editText.trim() === "") return;
    editTodo(id, editText.trim());
    setEditingId(null);
  };

  return (
    <div className="todoList">
      <h1 className="todoList__title">TodoList</h1>

      {/* FILTER BUTTONS */}
      <div className="todoList__filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("todo")}>Todo</button>
      </div>

      {/* TODO LIST DISPLAY */}
      <div className="todoList__items">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="todoList__item">
            {/* If this todo is being edited, show input box */}
            {editingId === todo.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && finishEditing(todo.id)}
                autoFocus
              />
            ) : (
              <p className={todo.done ? "todoList__text--done" : ""}>
                {todo.text}
              </p>
            )}

            {/* ACTION BUTTONS */}
            <div className="todoList__actions">
              {/* Checkbox to mark done */}
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(todo.id)}
              />

              {/* Edit button */}
              <button onClick={() => startEditing(todo)} disabled={todo.done}>
                <img src={penSolid} alt="edit" />
              </button>

              {/* Delete single task */}
              <button onClick={() => deleteTodo(todo.id)}>
                <img src={trashSolid} alt="delete" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM DELETE BUTTONS */}
      <div className="todoList__bottomBtns">
        <button onClick={deleteDoneTasks}>Delete done tasks</button>
        <button onClick={deleteAllTasks}>Delete all tasks</button>
      </div>
    </div>
  );
}

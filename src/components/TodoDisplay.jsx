import "../App.css";
import penSolid from "../assets/penSolid.svg";
import trashSolid from "../assets/trashSolid.svg";

export default function TodoDisplay({ todos, toggleDone }) {
  return (
    <div className="todoList">
      <h1 className="todoList__title">TodoList</h1>

      <div className="todoList__filters">
        <button className="todoList__filterBtn">All</button>
        <button className="todoList__filterBtn">Done</button>
        <button className="todoList__filterBtn">Todo</button>
      </div>

      <div className="todoList__items">
        {todos.map((todo) => (
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

              <button className="todoList__deleteBtn">
                <img src={trashSolid} alt="delete" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="todoList__bottomBtns">
        <button className="todoList__clearDone">Delete done tasks</button>
        <button className="todoList__clearAll">Delete all tasks</button>
      </div>
    </div>
  );
}

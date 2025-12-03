import "../App.css";
import penSolid from "../assets/penSolid.svg";
import trashSolid from "../assets/trashSolid.svg";

export default function TodoList() {
  return (
    <div className="todoList">
      <h1 className="todoList__title">TodoList</h1>

      {/* Filter Buttons */}
      <div className="todoList__filters">
        <button className="todoList__filterBtn">All</button>
        <button className="todoList__filterBtn">Done</button>
        <button className="todoList__filterBtn">Todo</button>
      </div>

      {/* Todo items container */}
      <div className="todoList__items">
        {/* Example — Completed Task */}
        <div className="todoList__item">
          <p className="todoList__text todoList__text--done">
            Learn ReactJS basics
          </p>

          <div className="todoList__actions">
            <input
              type="checkbox"
              className="todoList__checkbox"
              defaultChecked
            />

            <button className="todoList__iconBtn">
              <img src={penSolid} alt="edit" />
            </button>

            <button className="todoList__deleteBtn">
              <img src={trashSolid} alt="delete" />
            </button>
          </div>
        </div>

        {/* Example — Normal Task */}
        <div className="todoList__item">
          <p className="todoList__text">Practice ReactJS</p>

          <div className="todoList__actions">
            <input type="checkbox" className="todoList__checkbox" />

            <button className="todoList__iconBtn">
              <img src={penSolid} alt="edit" />
            </button>

            <button className="todoList__deleteBtn">
              <img src={trashSolid} alt="delete" />
            </button>
          </div>
        </div>

        {/* Copy this block for more items */}
      </div>

      {/* Bottom buttons */}
      <div className="todoList__bottomBtns">
        <button className="todoList__clearDone">Delete done tasks</button>
        <button className="todoList__clearAll">Delete all tasks</button>
      </div>
    </div>
  );
}

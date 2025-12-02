import "../App.css";
import bookSolid from "../assets/bookSolid.svg";
export default function TodoInput() {
  return (
    <div className="todoInput">
      <h1 className="todoInput__title">TodoInput</h1>

      <div className="todoInput__inputMainBox">
        <div className="todoInput__inputSection">
          <span className="todoInput__iconBox">
            <img src={bookSolid} alt="book icon" className="todoInput__icon" />
          </span>

          <input
            type="text"
            className="todoInput__inputBox"
            placeholder="New Todo"
          />
        </div>

        <button className="todoInput__btn">Add new task</button>
      </div>
    </div>
  );
}

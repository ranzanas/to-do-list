import "../App.css";
import bookSolid from "../assets/bookSolid.svg";
export default function TodoInput() {
  return (
    <div>
      <div className="todoInputContainer">
        <h1 className="todoInputContainer__title">TodoInput</h1>

        <div className="todoInputContainer__inputSection">
          <span>
            <img src={bookSolid} alt="" />
          </span>
          <input type="text" className="todoInputContainer__inputBox" />
        </div>

        <button type="submit">Add new task</button>
      </div>
    </div>
  );
}

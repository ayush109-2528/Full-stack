import { useState } from "react";
import "./App.css";

function App() {
  const [todo, settodo] = useState("");
  const [items, setitem] = useState([]);
  function additem(event) {
    const newvalue = event.target.value;
    settodo(newvalue);
  }
  function trigger() {
    setitem((prev) => {
      return [...prev, todo];
    });
    settodo("")
  }
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input onChange={additem} value={todo} name="item" type="text" />
          <button onClick={trigger}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((todoitems) => (
              <li> {todoitems}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

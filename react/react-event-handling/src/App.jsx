import { useState } from "react";

import "./App.css";
function App() {
  const [headingText, setheadingText] = useState("Hello");
  const [ismouseOver, setMouseOver] = useState(false);
  // const [ismouseOut, setMouseOut] = useState(false);
  function triggered() {
    setheadingText("submmitted");
  }
  function mouseOverEvent() {
    setMouseOver(true);
  }
  function mouseOutevent() {
    setMouseOver(false);
  }
  return (
    <>
      <div className="container">
        <h1>{headingText}</h1>
        <input type="text" placeholder="What's your name?" />
        <button
          style={{ backgroundColor: ismouseOver ? "black" : "white" }}
          onClick={triggered}
          onMouseOver={mouseOverEvent}
          onMouseOut={mouseOutevent}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;

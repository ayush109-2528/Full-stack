import { useState } from "react";
import "./App.css";

var count = 0;

function App() {
  const [count, setCount] = useState(0);
  function trigger() {
    setCount(count + 1);
  }
  function decrease(){
    setCount(count-1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={trigger}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

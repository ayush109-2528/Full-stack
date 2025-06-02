import { useState } from "react";
import "./App.css";

var isDone = true;
const strikeThrough = { textDecoration: "line-through" };
function strike(){
isDone = true;
  
}
function unstrike(){
  isDone = false;
}

function App() {
  return (
    <>
      <p style={isDone ? strikeThrough:null}>Buy Milk</p>
      <p>Buy Milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unstrike}>Change to unstrike through</button>
    </>
  );
}

export default App;
 
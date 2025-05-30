import { useState } from "react";
import "./App.css";
import Login from "../components/login";

var isLoggedIn = false;
const currentTime = new Date().getHours();
function App() {
  return (
    <>
      <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </>
  );
}

export default App;

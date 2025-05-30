import { useState } from "react";
import "./App.css";
import Form from "../Components/form";

var userIsRegistered = true;
function App() {
  return (
    <>
      <div className="container">
        <Form isregistered={userIsRegistered} />
      </div>
    </>
  );
}

export default App;

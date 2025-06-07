import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [triggered, fn] = useState(false);
  function handleChange(event) {
    // console.log("change");
    setName(event.target.value);
  }
  function trigger(event) {
    fn(name);
    event.preventDefault();
  }
  return (
    <>
      <div className="container">
        <h1>Hello {triggered}</h1>
        <form onSubmit={trigger}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="What's your name?"
            value={name}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;

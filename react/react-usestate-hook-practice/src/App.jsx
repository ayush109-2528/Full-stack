import { useState } from "react";
import "./App.css";
import { use } from "react";
// console.log(time);

function App() {
  setInterval(times, 1000);

  const now = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const [time, settime] = useState(now);

  function times() {
    const newtime = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    settime(newtime);
  }

  return (
    <>
      <div className="container">
        <h1>{time}</h1>
        <button onClick={times}>Get Time</button>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Dict from "./dict";
import emojioedia from "./assets/emojioedia";
function Mapping(emote) {
  return (
    <Dict
      // id={emote.id}
      key={emote.id}
      emoji={emote.emoji}
      name={emote.name}
      meaning={emote.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojioedia.map(Mapping)}</dl>
    </div>
  );
}

export default App;

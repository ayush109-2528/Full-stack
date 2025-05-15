import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

var root = document.getElementById("root");
 
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
 
createRoot(root).render(
  <StrictMode>
    <div>
      <h1>Hello React!</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  </StrictMode>
);
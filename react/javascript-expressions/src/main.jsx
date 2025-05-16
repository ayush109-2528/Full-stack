import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

var lucky = Math.floor(Math.random() * 10) + 1;
const fname = "Ayush";
const lname = "Rajput";
// It should display a h1 heading.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h1> Hello {fname} {lname} </h1>
      <p> My today lucky number is {lucky}</p>
    </div>
  </StrictMode>,
)
//  npm create vite@latest javascript-expressions -- --template react

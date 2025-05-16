import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const fname= "Ayush";
const lname = "Rajput";
// var today = new Date(),date = today.getFullYear();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <p>Created by {fname+ " "+ lname}</p>
      <p>Copyright {new Date().getFullYear()}.</p>
    </div>
  </StrictMode>,
)

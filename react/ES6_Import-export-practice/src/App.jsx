import { useState } from 'react'
import './App.css'
import {add,sub ,multiple,divide} from "../public/math"
function App() {


  return (
    <>
    <ul>
      <li>{add(1,2)}</li>
      <li>{multiple(2,3)}</li>
      <li>{sub(7,2)}</li>
      <li>{divide(7,2)}</li>
    </ul>
    </>
  )
}

export default App

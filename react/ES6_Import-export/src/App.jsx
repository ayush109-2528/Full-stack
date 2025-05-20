import { useState } from 'react'
import './App.css'
import pi, { doublepi, triplePi } from '../public/math'

function App() {

  return (
    <>
    <ul>
      <li>{pi}</li>
      <li>{doublepi()}</li>
      <li>{triplePi()}</li>
    </ul>
    </>
  )
}

export default App

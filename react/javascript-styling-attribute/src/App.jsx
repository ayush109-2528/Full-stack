import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1 className='heading1' contenteditable = "true" spellCheck="false ">My Favorite Food</h1>
      <ul>
        <li>chole Bathure</li>
        <li>pizza</li>
        <li>burger</li>
      </ul>
      <img src="https://picsum.photos/200/300" alt="" />
      <img src="https://picsum.photos/200/300" alt="" />
      <img src="https://picsum.photos/200/300" alt="" />
    </>
  )
}

export default App

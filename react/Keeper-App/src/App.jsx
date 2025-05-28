import { useState } from "react";
import "./App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Note from "../Components/Note";
import notes from "../Components/notes";

function App() {
  return (
    <>
      <Header />
      <div>
        {notes.map((note) => (
          <Note key={note.key} title={note.title} content={note.content} />
        ))};
      </div>
      <Footer />
    </>
  );
}

export default App;

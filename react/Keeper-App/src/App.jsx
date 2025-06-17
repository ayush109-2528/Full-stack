import { useState } from "react";
import "./App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Note from "../Components/Note";
import CreateArea from "../Components/CreateArea";

function App() {
  const [notes, setnotes] = useState([]);

  function additem(newNotes) {
    setnotes((prevItems) => {
      return [...prevItems, newNotes];
    });
  }

  function deleteItem(id) {
    setnotes((prevItems) => {
      return prevItems.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div>
        <Header />
        <CreateArea onadd={additem} />
        {notes.map((noteitem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteitem.title}
              content={noteitem.content}
              onDelete={deleteItem}
            />
          );
        })}
        ;
        <Footer />
      </div>
    </>
  );
}

export default App;

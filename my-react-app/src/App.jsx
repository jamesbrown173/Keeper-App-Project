import React, { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Note from "./assets/components/Note";
import CreateArea from "./assets/components/CreateArea";

function App() {
  const [currentNotes, setCurrentNotes] = useState([]);

  function addNote(inputText) {
    setCurrentNotes((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  function deleteNote(id) {
    setCurrentNotes((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={addNote} />
      {currentNotes.map((note, index) => (
        <Note
          title={note.title}
          content={note.content}
          key={index}
          id={index}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

/*




*/

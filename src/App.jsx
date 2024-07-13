import React, { useState} from "react";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);

  // Add a new note
  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Delete a note by id
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  };

  // Edit a note by id
  const editNote = (id, updatedTitle, updatedContent) => {
    setNotes((prevNotes) =>
      prevNotes.map((noteItem, index) =>
        index === id ? { ...noteItem, title: updatedTitle, content: updatedContent } : noteItem
      )
    );
  };

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
          onEdit={editNote}
        />
      ))}
    </div>
  );
};

export default App;

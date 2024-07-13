import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import '../App.css';

const CreateNote = (props) => {
  const [isExpand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(ev) {
    const { name, value } = ev.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }

  function submitNote(ev) {
    ev.preventDefault();
    if (note.title || note.content) {
      props.onAdd(note);
      setNote({ title: "", content: "" });
      setExpand(false); // collapse after adding
    }
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div className="create-note">
      <form>
        {isExpand && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          value={note.content}
          placeholder={isExpand ? "Content goes here..." : "Take a note..."}
          onClick={expand}
          onChange={handleChange}
        />
        {isExpand && (
          <button className="add-note" onClick={submitNote}>
            <IoIosAdd />
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateNote;

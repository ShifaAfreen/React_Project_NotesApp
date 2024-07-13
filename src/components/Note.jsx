import React, { useState } from 'react';
import { MdDelete, MdEdit, MdSave } from "react-icons/md";
import '../App.css'

const Note = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEditToggle() {
    setIsEditing(!isEditing);
  }

  function handleSave() {
    props.onEdit(props.id, title, content);
    setIsEditing(false);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  return (
    <div className='note'>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={title} 
            onChange={handleTitleChange} 
          />
          <textarea 
            value={content} 
            onChange={handleContentChange} 
          />
          <button className='save-note' onClick={handleSave}><MdSave /></button>
        </>
      ) : (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button className='edit-note' onClick={handleEditToggle}><MdEdit /></button>
        </>
      )}
      <button className='del-note' onClick={handleDelete}><MdDelete /></button>
    </div>
  )
}

export default Note;

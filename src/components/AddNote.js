import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const contextValue = useContext(NoteContext);
  const { addNote } = contextValue;
  const [note, setNote] = useState({ title: "", description: "", tag: "default" });

  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Add Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
            aria-describedby="titleHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            aria-describedby="descriptionHelp"
          />
        </div>

        <button
          type="button"  
          className="btn btn-outline-primary"
          onClick={handleAddNote}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddNote;

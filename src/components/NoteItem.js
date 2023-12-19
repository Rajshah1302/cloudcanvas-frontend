import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const { note } = props;
  const contextValue = useContext(NoteContext);
  const { deleteNote, updateNote } = contextValue;
  const handleDelete = () => {
    deleteNote(note._id);
  };
  const handleUpdate = () => {
    updateNote(note._id);
  };
  return (
    <>
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">{note.title}</h5>
              <div className="d-flex">
                <i
                  className="fa-solid fa-trash mx-2"
                  onClick={handleDelete}
                ></i>
                <i
                  className="fa-solid fa-pen-to-square"
                  onClick={handleUpdate}
                ></i>
              </div>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;

import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const contextValue = useContext(NoteContext);
  const { notes, getNote } = contextValue;
  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      getNote();
    } else {
      nav("/login");
    }
  });
  return (
    <>
      <AddNote />
      <h2>Your Notes</h2>
      <div className="row">
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;

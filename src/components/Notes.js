import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const contextValue = useContext(NoteContext);
  const { notes, setNotes } = contextValue;
  return (
    <>
      <div className="row">
        {notes.map((note) => {
          return <NoteItem note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;

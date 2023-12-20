import React, { useContext,useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import UpdateModal from "./UpdateModal";

const Notes = () => {
  const contextValue = useContext(NoteContext);
  const { notes,getNote } = contextValue;
  useEffect(()=>{
    getNote();
  },[])
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

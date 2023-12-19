import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "6580553ae3d8f9acfc0d2296",
      user: "656a3b6e578adf99d83551da",
      title: "First Note Ever",
      description: "I did it",
      tag: "abc",
      date: "2023-12-18T14:20:42.081Z",
      __v: 0,
    },
    {
      _id: "65805a235463a8d7dc330bc2",
      user: "656a3b6e578adf99d83551da",
      title: "First Updated Note Ever",
      description: "I updated it",
      tag: "abc",
      date: "2023-12-18T14:41:39.106Z",
      __v: 0,
    },
    {
        _id: "6580553aae3d8f9acfc0d2296",
        user: "656a3b6e578adf99d83551da",
        title: "First Note Ever",
        description: "I did it",
        tag: "abc",
        date: "2023-12-18T14:20:42.081Z",
        __v: 0,
      },
      {
        _id: "65805a23s5463a8d7dc330bc2",
        user: "656a3b6e578adf99d83551da",
        title: "First Updated Note Ever",
        description: "I updated it",
        tag: "abc",
        date: "2023-12-18T14:41:39.106Z",
        __v: 0,
      },
      {
        _id: "6580553aeas3d8f9acfc0d2296",
        user: "656a3b6e578adf99d83551da",
        title: "First Note Ever",
        description: "I did it",
        tag: "abc",
        date: "2023-12-18T14:20:42.081Z",
        __v: 0,
      },
      {
        _id: "65805a2354as63a8d7dc330bc2",
        user: "656a3b6e578adf99d83551da",
        title: "First Updated Note Ever",
        description: "I updated it",
        tag: "abc",
        date: "2023-12-18T14:41:39.106Z",
        __v: 0,
      },
      {
        _id: "6580553ae3dasd8f9acfc0d2296",
        user: "656a3b6e578adf99d83551da",
        title: "First Note Ever",
        description: "I did it",
        tag: "abc",
        date: "2023-12-18T14:20:42.081Z",
        __v: 0,
      },
      {
        _id: "65805a235463a8dasd7dc330bc2",
        user: "656a3b6e578adf99d83551da",
        title: "First Updated Note Ever",
        description: "I updated it",
        tag: "abc",
        date: "2023-12-18T14:41:39.106Z",
        __v: 0,
      },
  ];

  const [notes, setNotes] = useState(initialNotes);
  //Add Note
  const addNote =(title,description,tag)=>{
    //TODO api call
    let newNote = {
      _id: "65805a235463a8dasd7dc330bc2",
      user: "656a3b6e578adf99d83551da",
      title: title,
      description: description,
      tag: tag,
      date: "2023-12-18T14:41:39.106Z",
      __v: 0,
    };
    setNotes(notes.concat(newNote));
  }
  //update Note
  const updateNote =()=>{

  }
  //Delete Note
  const deleteNote = ()=>{

  }
  return (
    // Providing state and set function through NoteContext.Provider
    <NoteContext.Provider value={{ notes, addNote,updateNote,deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

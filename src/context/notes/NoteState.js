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
  ];

  const [notes, setNotes] = useState(initialNotes);

  return (
    // Providing state and set function through NoteContext.Provider
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  // Initial state
  const initialState = {
    name: "Raj",
    class: "Abc",
  };

  // State variable and function to update the state
  const [state, setState] = useState(initialState);

  // Function to update state after a delay
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Raj",
        class: "XYZ",
      });
    }, 1000);
  };

  return (
    // Providing state and update function through NoteContext.Provider
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

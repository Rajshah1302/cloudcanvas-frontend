import React, {  useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

export const About = () => {
  // Accessing the context provided by NoteState
  const noteContextValue = useContext(noteContext);

  return (
    <div>
      {/* Displaying information from the context state */}
      About {noteContextValue.state.name} and {noteContextValue.state.class}
    </div>
  );
};

export default About;

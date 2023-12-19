import React, { useEffect, useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

export const About = () => {
  // Accessing the context provided by NoteState
  const noteContextValue = useContext(noteContext);

  // Using useEffect to invoke the update function when the component mounts
  useEffect(() => {
    noteContextValue.update();
    // The empty dependency array ensures that the effect runs only once after the initial render
  }, []);

  return (
    <div>
      {/* Displaying information from the context state */}
      About {noteContextValue.state.name} and {noteContextValue.state.class}
    </div>
  );
};

export default About;

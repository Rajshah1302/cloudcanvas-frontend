import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const URL = "http://localhost:2000/api/notes";
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  //Get all Note
  const getNote = async (title, description, tag) => {
    try {
      const response = await fetch(URL + "/fetchNotes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2YTNiNmU1NzhhZGY5OWQ4MzU1MWRhIn0sImlhdCI6MTcwMjkwMDI0MH0.b-_-i8xUoWbaujdnDjai_wreV1plMCgqhk4llysBF_I", // Replace with your actual auth token
        },
      });
      const allNotes = await response.json();
      setNotes(allNotes);
    } catch (error) {
      console.error("An error occurred while fetching the note:", error);
      // Handle network or other errors
    }
  };

  //Add Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(URL + "/addNotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2YTNiNmU1NzhhZGY5OWQ4MzU1MWRhIn0sImlhdCI6MTcwMjkwMDI0MH0.b-_-i8xUoWbaujdnDjai_wreV1plMCgqhk4llysBF_I", // Replace with your actual auth token
        },
        body: JSON.stringify({ title, description, tag }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const data = await response.json();
        setNotes((notes) => [...notes, data]); // Assuming the response contains the newly added note
      } else {
        console.error(`Failed to add note. Status: ${response.status}`);
        // Handle specific error cases if needed
      }
    } catch (error) {
      console.error("An error occurred while adding the note:", error);
      // Handle network or other errors
    }
  };

  // Update Note
  const updateNote = async (id, updatedTitle, updatedDescription, updatedTag) => {
    try {
      // Perform API call to update the note
      const response = await fetch(URL + "/updateNotes/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "your-auth-token", // Replace with your actual auth token
        },
        body: JSON.stringify({ updatedTitle, updatedDescription, updatedTag }),
      });
  
      // Assuming the API call is successful
      const updatedNotes = notes.map((note) => {
        if (note._id === id) {
          // Update the specific note
          return {
            ...note,
            title: updatedTitle,
            description: updatedDescription,
            tag: updatedTag,
          };
        }
        return note; // Return unchanged notes
      });
  
      // Update the state with the modified notes array
      setNotes(updatedNotes);
    } catch (error) {
      console.error("An error occurred while updating the note:", error);
      // Handle network or other errors
    }
  };
  

  //Delete Note
  const deleteNote = async (id) => {
    //API call
    try {
      const response = await fetch(URL + "/deleteNote/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2YTNiNmU1NzhhZGY5OWQ4MzU1MWRhIn0sImlhdCI6MTcwMjkwMDI0MH0.b-_-i8xUoWbaujdnDjai_wreV1plMCgqhk4llysBF_I", // Replace with your actual auth token
        },
      });

console.log("Response status:", response.status);

      if (response.ok) {
        const newNotes = notes.filter((notes) => {
          return notes._id !== id;
        });
        setNotes(newNotes);
      } else {
        console.error(`Failed to add note. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred while adding the note:", error);
    }
  };
  return (
    // Providing state and set function through NoteContext.Provider
    <NoteContext.Provider
      value={{ notes, addNote, updateNote, deleteNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

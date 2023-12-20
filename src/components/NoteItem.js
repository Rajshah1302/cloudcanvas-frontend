import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import UpdateModal from "./UpdateModal";

const NoteItem = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { note } = props;
  const contextValue = useContext(NoteContext);
  const { deleteNote, updateNote } = contextValue;
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async (id) => {
    if (isDeleting) {
      // Ignore multiple clicks
      return;
    }
    try {
      // Set the deletion flag to true
      setIsDeleting(true);

      // Perform the deletion operation
      await deleteNote(id);
    } catch (error) {
      console.error("Error deleting note:", error);
    } finally {
      // Reset the deletion flag to false
      setIsDeleting(false);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("click");
    setModalVisible(true);
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
                  onClick={() => !isDeleting && handleDelete(note._id)}
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
      <UpdateModal toggle={isModalVisible} id={note._id} />
    </>
  );
};

export default NoteItem;

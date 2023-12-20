import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import NoteContext from "../context/notes/NoteContext";

function UpdateModal(props) {
  const [show, setShow] = useState(false);
  const { toggle = false,id } = props;

  const contextValue = useContext(NoteContext);
  const { updateNote } = contextValue;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  useEffect(() => {
    console.log(toggle);
    setShow(toggle);
  }, [toggle]);

  const handleAddNote = async (e) => {
    e.preventDefault();
    await updateNote(id,note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    handleClose();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={note.title}
                onChange={onChange}
                aria-describedby="titleHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={note.description}
                onChange={onChange}
                aria-describedby="descriptionHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Tag
              </label>
              <input
                type="text"
                className="form-control"
                id="tag"
                name="tag"
                value={note.tag}
                onChange={onChange}
                aria-describedby="descriptionHelp"
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={handleAddNote}
            >
              Add
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateModal;

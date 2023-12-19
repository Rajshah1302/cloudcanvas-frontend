import React, { useContext } from "react";
import Notes from "./Notes";
export const Home = () => {
  return (
    <div className="container my-3">
      <h1>Add Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input className="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Add
        </button>
      </form>
      <h2>Your Notes</h2>
      <Notes />
    </div>
  );
};

export default Home;

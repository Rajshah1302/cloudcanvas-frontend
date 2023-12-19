import React, { useContext } from "react";
import Notes from "./Notes";
export const Home = () => {
  return (
    <div className="container my-3">
      <h1>Add Note</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Description
          </label>
          <input class="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" class="btn btn-outline-primary">
          Add
        </button>
      </form>
      <h2>Your Notes</h2>
      <Notes />
    </div>
  );
};

export default Home;

import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
 
const Signup = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const response = await fetch(
        "http://localhost:2000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(JSON.stringify(formData));
      const json = await response.json();
      if (response.ok) {
        console.log("Account Successfully Created");
        localStorage.setItem("token", json.token);
        nav("/");
      } else {
        console.error(json);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div
        className="container d-flex mt-5 justify-content-center p-0 "
        onSubmit={handleSubmit}
      >
        <form className="p-4 border rounded col-md-6">
          <h3 className="mb-4">Sign Up</h3>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter Name"
              name="firstName"
              required
              minLength={3}
              ref={nameRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              placeholder="Enter email"
              name="email"
              ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              placeholder="Enter password"
              name="password"
              minLength={5}
              ref={passwordRef}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right mt-3">
            Already registered? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const nav = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("token");
    nav("/login");
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            CloudCanvas
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* Apply 'active' class based on the current location */}
                {localStorage.getItem("token") ? (
                  <Link
                    className={`nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                ) : (
                  <span className="nav-link disabled" aria-current="page">
                    Home
                  </span>
                )}
              </li>
              <li className="nav-item">
                {/* Apply 'active' class based on the current location */}
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <div className="ms-auto">
                <Link
                  className={`btn btn-outline-light me-2 ${
                    location.pathname === "/login" ? "d-none" : ""
                  }`}
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className={`btn btn-outline-light ${
                    location.pathname === "/signup" ? "d-none" : ""
                  }`}
                  to="/signup"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <button
                className="btn btn-outline-light me-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

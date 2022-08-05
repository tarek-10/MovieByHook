import React from "react";
import { NavLink } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./Header.css";
const Header = () => {
  let decoded = "";
  let logData = localStorage.getItem("token");
  try {
    decoded = jwt_decode(logData);
    console.log(decoded);
  } catch (error) {
    localStorage.clear();
  }
  const clearData = () => {
    localStorage.clear();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <NavLink className="navbar-brand" to="/">
          Noxe
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movie">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tv">
                TvShow
              </NavLink>
            </li>
            {!logData ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 searchBtn"
              type="submit"
            >
              Search
            </button>
          </form>
          <div>
            <NavLink className="nav-link finalItem" to="/home">
              {logData ? (
                <div>
                  <div className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle navName"
                      to="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {decoded.first_name}
                    </NavLink>
                    <div className="dropdown-menu">
                      <NavLink
                        onClick={clearData}
                        className="dropdown-item"
                        to="/login"
                      >
                        Logout
                      </NavLink>
                    </div>
                  </div>
                </div>
              ) : (
                "Logout"
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

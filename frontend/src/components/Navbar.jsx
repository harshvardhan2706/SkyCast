import React from "react";
import "./../styles/style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark glass-navbar">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-3" href="#">
          🌤️ SkyCast
        </a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 search-input"
            type="search"
            placeholder="Search city..."
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

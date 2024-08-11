import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand">HBO</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className="nav-link" to={`/movies`}>
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/customers`}>
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/rentals`}>
              Rentals
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/login`}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/registration`}>
              Registration
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

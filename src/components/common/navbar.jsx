import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand">HBO</Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <Link class="nav-link" to={`/movies`}>
              Movies
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={`/customers`}>
              Customers
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={`/rentals`}>
              Rentals
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

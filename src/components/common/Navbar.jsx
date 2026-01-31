import React from "react";
import "../../index.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          MyApp
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

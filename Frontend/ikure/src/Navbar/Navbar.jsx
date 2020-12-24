import React from "react";
import { Link } from "react-router-dom";
// import RoutePath from "./RoutePath";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" class="navbar-brand" href="#">
          <img
            src="https://theme.zdassets.com/theme_assets/2041222/c3ea09fd3c3bd646257ea97a6083bf5f45807354.png"
            width="50"
            height="50"
            alt="Meetup"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/register" className="nav-item nav-link active" href="#">
              {" "}
              REGISTRATION<span className="sr-only">(current)</span>
            </Link>
            <Link to="/login" className="nav-item nav-link" href="#">
              LOGIN
            </Link>
            {/* <Link to="/reports" className="nav-item nav-link" href="#">
              DASHBOARD
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

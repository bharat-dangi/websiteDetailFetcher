import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SuperCoolWebsite</span>
        </Link>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <span className="topbarLink">About</span>
          </Link>

          <Link to="/instruction" style={{ textDecoration: "none" }}>
            <span className="topbarLink">How it works?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

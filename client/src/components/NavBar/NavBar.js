import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        {/* <Link to="/" style={{ textDecoration: "none" }}>
        </Link> */}
        <span className="logo">SuperCoolWebsite</span>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          {/* <Link to="/" style={{ textDecoration: "none" }}>
          </Link> */}
          <span className="topbarLink">About</span>

          {/* <Link to="/" style={{ textDecoration: "none" }}>
           
          </Link> */}
          <span className="topbarLink">How it works?</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

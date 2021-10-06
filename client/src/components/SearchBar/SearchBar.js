import React from "react";
import "./searchbar.css";

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <div className="searchbar">
        <input placeholder="Type Website Name " className="searchInput" />
      </div>
      <div>
        <button>FETCH INFO</button>
      </div>
    </div>
  );
};

export default SearchBar;

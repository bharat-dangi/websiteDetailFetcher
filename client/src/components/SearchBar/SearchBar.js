import React, { useState } from "react";
import "./searchbar.css";
import axios from "axios";

const SearchBar = ({ setDomainDetails }) => {
  const [domain, setDomain] = useState("");

  const handleChange = (event) => {
    setDomain(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `http://localhost:8000/api/domain/${domain}`
    );
    setDomainDetails(data);
  };

  return (
    <div className="searchBarContainer">
      <div className="searchbar">
        <input
          placeholder="Type Website Name "
          className="searchInput"
          onChange={handleChange}
          type="text"
          value={domain}
        />
      </div>
      <div>
        <button onClick={onSubmit}>FETCH INFO</button>
      </div>
    </div>
  );
};

export default SearchBar;

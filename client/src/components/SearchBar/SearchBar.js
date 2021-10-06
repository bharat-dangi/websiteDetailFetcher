import React, { useState } from "react";
import "./searchbar.css";
import axios from "axios";

const SearchBar = ({ setDomainDetails, setError, setLoading }) => {
  const [domain, setDomain] = useState("");

  const handleChange = (event) => {
    setDomain(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setDomainDetails(null);
    setLoading(true);
    setError(false);
    try {
      const { data } = await axios.get(
        `https://website-detail.herokuapp.com/api/domain/${domain}`
      );
      setDomainDetails(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
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

import React, { useState } from "react";
import Info from "../../components/Info/Info";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const [domainDetails, setDomainDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div>
      <NavBar />
      <SearchBar
        setDomainDetails={setDomainDetails}
        setError={setError}
        setLoading={setLoading}
      />
      <Info domainDetails={domainDetails} error={error} loading={loading} />
    </div>
  );
};

export default Home;

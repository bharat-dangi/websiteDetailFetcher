import React, { useState } from "react";
import Info from "../../components/Info/Info";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const [domainDetails, setDomainDetails] = useState(null);
  console.log("DETAIL: ", domainDetails);

  return (
    <div>
      <NavBar />
      <SearchBar setDomainDetails={setDomainDetails} />
      <Info />
    </div>
  );
};

export default Home;

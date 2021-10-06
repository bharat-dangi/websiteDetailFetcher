import React from "react";
import Info from "../../components/Info/Info";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Info/>
    </div>
  );
};

export default Home;

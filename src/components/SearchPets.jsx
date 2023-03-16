import React, { useState } from "react";
import { StyledSearch } from "./styled/Search.styled";

function SearchPets({ searchPets }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchPets(e.target.value);
  };
  return (
    <StyledSearch>
      <h2>Search Pets</h2>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
    </StyledSearch>
  );
}

export default SearchPets;

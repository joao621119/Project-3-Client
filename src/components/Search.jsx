import React, { useState } from "react";
import { StyledSearch } from "../components/styled/Search.styled"
import { Typography } from "@mui/material";

function SearchPets({ searchPets }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchPets(e.target.value);
  };
  return (
  <StyledSearch>
    <div class="searchPosition">
      <Typography variant="h4">Search Pets</Typography>
      <label id="searchLabel" htmlFor="search">📍 Search:</label>
      <input id="searchInput" type="text" name="search" value={search} onChange={handleSearch} />
    </div>
    </StyledSearch>
    
  );
}

export default SearchPets;

import { Typography } from "@mui/material";
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
    <div id="searchPosition">
     
      <label htmlFor="search"> <Typography variant="h4">Search by Location:</Typography></label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
      </div>
    </StyledSearch>
  );
}

export default SearchPets;

import React, { useState } from "react";

function SearchPets({ searchPets }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchPets(e.target.value);
  };
  return (
    <div>
      <h2>Search Pets</h2>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
    </div>
  );
}

export default SearchPets;

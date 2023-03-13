/* import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Get from API

function Pets() {
  const [pets, setPets] = useState([]); // Get all
  const [query, setQuery] = useState(""); // Search
  const [searchResult, setSearchResult] = useState(null);

  const getFromApi = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers`
      );
      setPets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);
  console.log(beers);

  // Search on API

  const handleSearch = (e) => setQuery(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      );
      setSearchResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <Navbar />

      <form onChange={handleSubmit}>
        <label htmlFor="query">Search Pet</label>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleSearch}
        ></input>
      </form>

      <h1>All Pets</h1>

      {searchResult &&
        searchResult.map((beer) => {
          return (
            <div>
              <img className="images" src={pet.image_url} alt="PetImage" />
              <p>{pet.name}</p>
              <p>{pet.tagline}</p>
              <p>{pet.contributed_by}</p>

              <Link to={`/${pet._id}`}>
                <p>Go to Details</p>
              </Link>
            </div>
          );
        })}

      {pets.length &&
        !searchResult &&
        pets.map((pet) => {
          return (
            <>
              <img className="images" src={pet.image_url} alt="petImage" />
              <p>{pet.name}</p>
              <p>{pet.tagline}</p>
              <p>{pet.contributed_by}</p>

              <Link to={`/${pet._id}`}>
                <p>Go to Details</p>
              </Link>
            </>
          );
        })}
    </div>
  );
}

export default Pets; */

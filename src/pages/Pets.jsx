import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import petService from "../services/pet.service";
import { StyledSection } from "../components/styled/Section.styled";
import { PetListSection } from "../components/styled/PetList.styled";
import { StyledButton } from "../components/styled/Button.styled";
import SearchPets from "../components/SearchPets";
import { AuthContext } from "../context/auth.context";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import Grid from "@mui/material/Grid";

function Pets() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  const [pets, setPets] = useState([]); // Main array of pets
  const [showPet, setShowPet] = useState([]); // Filtered array of pets (search)
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const getPets = async () => {
    try {
      const response = await petService.getAllPets();
      setPets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPets();
  }, []);

  const searchPets = (query) => {
    const filteredPets = pets.filter(
      (pet) =>
        pet.location.toLowerCase().includes(query.toLowerCase()) &&
        (selectedSpecies === null ||
          pet.species.toLowerCase() === selectedSpecies.toLowerCase())
    );
    setShowPet(filteredPets);
  };

  const filterBySpecies = (species) => {
    setSelectedSpecies(species);

    if (species === null) {
      setShowPet(pets);
    } else {
      const filteredPets = pets.filter((pet) =>
        pet.species.toLowerCase() === species.toLowerCase()
      );
      setShowPet(filteredPets);
    }
  };


  /* If the showpet array has something inside use it, otherwise use the main pets array */
  const petList = showPet.length ? showPet : pets;

  return (
    <Container>
      
      <SearchPets searchPets={searchPets} />

      <div>
        <StyledButton onClick={() => filterBySpecies(null)}>🐾 All Pets</StyledButton>
        <StyledButton onClick={() => filterBySpecies('dog')}>🐶</StyledButton>
        <StyledButton onClick={() => filterBySpecies('cat')}>🐱</StyledButton>
        <StyledButton onClick={() => filterBySpecies('rabbit')}>🐰</StyledButton>
        <StyledButton onClick={() => filterBySpecies('bird')}>🐦</StyledButton>
    </div>

    <Typography className="pageh1" variant="h1" gutterBottom>Pets</Typography>

    {loggedIn && (
      <Link to="/pets/add">
        <StyledButton primary={true}><Typography>Add a pet</Typography></StyledButton>
      </Link>
)}

      <PetListSection>

        <Grid container spacing={2}>
          {petList.map((pet) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={pet._id}>
                <Link to={`/pets/${pet._id}`}>
                  <Card sx={{ borderRadius: "16px" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        width="100%"
                        image={pet.image}
                        alt={pet.name}
                        sx={{
                          objectFit: "cover",
                          position: "relative",
                          borderRadius: "16px 16px 0 0",
                        }}
                      />
                      <CardContent
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          width: "89%",
                          backgroundColor: "rgba(248, 175, 166, 0.7)",
                          color: "white",
                          padding: "10px",
                          borderRadius: "0 0 16px 16px",
                        }}
                      >

                      <Typography gutterBottom variant="h4" component="div">{pet.name}</Typography>

                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                        >
                          📍{pet.location}
                        </Typography>

                        {pet.breed && (
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                          >
                            {pet.species} breed: {pet.breed}
                          </Typography>
                        )}
                        
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </PetListSection>
    </Container>
  );
}

export default Pets;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import petService from "../services/pet.service";
import { StyledSection } from "../components/styled/Section.styled";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// css

// components

function Pets() {
  const [pets, setPets] = useState([]);

  const getPets = async () => {
    try {
      const response = await petService.getAllPets();

      console.log(response.data);
      setPets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <StyledSection>
      <Typography variant="h1" gutterBottom>
        Pets
      </Typography>
      {pets.map((pet) => {
        return (
          <>
            {/*  Assign it a key otherwise react will complain if you map ovr an array without a key */}

            <Link to={`/pets/${pet._id}`} key={pet._id}>
              <Card sx={{ maxWidth: 345 }} key={pet._id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={pet.image}
                    alt="A Pet"
                  />
                  <CardContent key={pet._id}>
                    <Typography gutterBottom variant="h5" component="div">
                      {pet.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {pet.species}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {pet.breed}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {pet.owner.length && pet.owner[0].name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {pet.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </>
        );
      })}
    </StyledSection>
  );
}

export default Pets;
/* 
import React from 'react'

function Pets() {
  return (
    <div>Pets</div>
  )
}

export default Pets */

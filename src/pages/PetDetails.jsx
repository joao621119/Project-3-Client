import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import petService from "../services/pet.service";
import { Typography } from "@mui/material";

function PetDetails() {
  const [pet, setPet] = useState(null);

  const { id } = useParams();

  const getPet = async () => {
    try {
      const response = await petService.getSinglePet(id);
      setPet(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPet();
  }, []);

  return (
    <div>
      {pet && (
        <>
          <div>
            <img src={pet.image} alt="" />

            <h1>{pet.name}</h1>
            <Typography>Gender: {pet.gender ? "male" : "female"}</Typography>
            <Typography>Age: {pet.age}</Typography>
            {pet.birthDate && (
              <Typography>Birth-date: {pet.birthDate}</Typography>
            )}
            <Typography>Weight {pet.weight}kg </Typography>
            <Typography>Sterilized: {pet.sterilized}</Typography>
            <Typography>Species: {pet.species}</Typography>
            <Typography>
              Breed of {pet.species}: {pet.breed}
            </Typography>
            <Typography>Location: {pet.location}</Typography>
            <Typography>
              About {pet.name}: {pet.description}
            </Typography>
            <Typography>Owner: {pet.owner[0].name}</Typography>
          </div>
        </>
      )}
    </div>
  );
}

export default PetDetails;

/* import React from 'react'

function PetDetails() {
  return (
    <div>PetDetails</div>
  )
}

export default PetDetails */

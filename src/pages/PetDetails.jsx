import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import petService from "../services/pet.service";
import { Typography, Button } from "@mui/material";
import { StyledButton } from "../components/styled/Button.styled";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service";

function PetDetails() {
  const [pet, setPet] = useState(null);
  const [liked, setLiked] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const { user } = useContext(AuthContext);

  const { id } = useParams();

  const storedToken = localStorage.getItem("authToken");

  const getPet = async () => {
    try {
      const response = await petService.getSinglePet(id);
      setPet(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const likePet = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/pets/like/${id}`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      /*  await petService.likePet(id); */
      console.log(response.data);
      setPet(response.data);
      setLiked(true);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePet = async () => {
    try {
      await petService.deletePet(id);
      setDeleted(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPet();
  }, []);

  const canEdit = pet && pet.owner.includes(user._id);

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
            <Link to={`/profile/${pet.owner[0]._id}`} key={pet.owner._id}>
              <Typography>Owner: {pet.owner[0].name}</Typography>
            </Link>
           {/*  {canEdit && (
            )} */}
              <Link to={`/pets/edit/${id}`}>
                <StyledButton>Edit Pet</StyledButton>
              </Link>
            {/* {pet.owner.includes(user._id) && (
              )} */}
            <StyledButton onClick={deletePet}>Delete Pet</StyledButton>
            <StyledButton
              primary={liked ? "true" : "false"}
              disabled={liked}
              onClick={likePet}
            >
              {liked ? "Liked" : "Like"}
            </StyledButton>
          </div>
        </>
      )}
      {deleted && <p>Pet has been deleted</p>}
    </div>
  );
}

export default PetDetails;

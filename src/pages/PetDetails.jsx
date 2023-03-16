import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import petService from "../services/pet.service";
import { Typography, Button } from "@mui/material";
import { StyledButton } from "../components/styled/Button.styled";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service";
import {
  StyledPetDetails,
  StyledPetOwner,
} from "../components/styled/PetDetails.styled";

function PetDetails() {
  const [pet, setPet] = useState(null);
  const [liked, setLiked] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [canEdit, setCanEdit] = useState("");

  const { user } = useContext(AuthContext);
  // console.log("this is the user", user);
  const { id } = useParams();

  const navigate = useNavigate();

  const storedToken = localStorage.getItem("authToken");

  const getPet = async () => {
    try {
      const response = await petService.getSinglePet(id);
      // console.log(response.data.owner[0]._id);

      setPet(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const likePet = async () => {
    try {
      if (liked) {
        console.log(liked);

        const response = await petService.unlikePet(id);
      } else {
        console.log(liked);
        const response = await petService.likePet(id);
      }

      getPet();
      checkLike();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePet = async () => {
    try {
      await petService.deletePet(id); // Navigate here
      setDeleted(true);
      navigate(`/profile`); // Redirect
    } catch (error) {
      console.log(error);
    }
  };

  const checkEdit = () => {
    if (user) {
      if (pet && pet.owner[0]._id === user._id) {
        setCanEdit(true);
      } else {
        setCanEdit(false);
      }
    } else {
      setCanEdit(false);
    }
  };

  const checkLike = () => {
    if (
      pet &&
      pet.interestedUsers.find((interested) => interested === user._id)
    ) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  };

  useEffect(() => {
    checkEdit();
    checkLike();
  }, [user, pet]);
  /*  const userCanEdit = async () => {
    try {
      const response = await petService.getSinglePet(id);

      //const edit = await pet.owner.includes(user._id);
      console.log(response.data);
      if (response.data.owner === user._id) {
        setCanEdit(true);
      } else {
        setCanEdit(false);
      }
    } catch (error) {
      console.log(error);
    }
  }; */

  useEffect(() => {
    getPet();
  }, []);

  //setCanEdit [pet.owner.includes(user._id)]

  return (
    <StyledPetDetails>
      {pet && (
        <>
          <div>
            <img src={pet.image} alt="" />
          </div>

          <div>
            <Typography variant="h2">{pet.name}</Typography>
          </div>

          <div>
            {/* TO LIKE/UNLIKE PET */}
            {!canEdit && pet && user && (
              <StyledButton
                primary={liked ? "true" : "false"}
                onClick={likePet}
              >
                {liked ? "Liked" : "Like"}
              </StyledButton>
            )}

            {/* TO EDIT / DELETE PET IF IT BELONGS TO THE USER: */}

            {canEdit && (
              <>
                <Link to={`/pets/edit/${id}`}>
                  <StyledButton>Edit Pet</StyledButton>
                </Link>
                <StyledButton onClick={deletePet}>Delete Pet</StyledButton>
              </>
            )}
          </div>

          <div id="petInfoContainer">
            <Typography variant="h5" gutterBottom>
              Gender: {pet.gender ? "Male" : "Female"}
            </Typography>

            {pet.age && (
              <Typography variant="h5" gutterBottom>Age: {pet.age} years old</Typography>
            )}

            {/*   {pet.birthDate && (
              <Typography variant="h5" gutterBottom>Birth-date: {pet.birthDate}</Typography>
            )} */}

            {pet.weight && (
              <Typography variant="h5" gutterBottom>
                Weight: {pet.weight} kg
              </Typography>
            )}

            {/* {pet.sterilized && (
              <Typography variant="h5" gutterBottom>Sterilized: {pet.sterilized}</Typography>
            )} */}

            <Typography variant="h5" gutterBottom>
              Type of animal: {pet.species}
            </Typography>

            {pet.breed && (
              <Typography variant="h5" gutterBottom>
                Breed of {pet.species}: {pet.breed}
              </Typography>
            )}

            <Typography variant="h5" gutterBottom>
              Pick-ip location: {pet.location}
            </Typography>

            <Typography variant="h5" gutterBottom>
              About {pet.name}: {pet.description}
            </Typography>

{user._id !== pet.owner[0]._id && (
  
            <StyledPetOwner>
              <Link to={`/profile/${pet.owner[0]._id}`} key={pet.owner._id}>
                <div>
                  <img
                    className="petOwnerImg"
                    src={pet.owner[0].image}
                    alt="Pets owner"
                  />

                  <Typography variant="h5">
                    {pet.name}'s owner: {pet.owner[0].name}
                  </Typography>
                  {pet.owner[0].phone && (
                    <Typography variant="h5">{pet.owner[0].name}'s phone number: {pet.owner[0].phone}</Typography>
                  )}
                  {!pet.owner[0].phone && (
                    <Typography variant="h5">{pet.owner[0].name}'s email: {pet.owner[0].email}</Typography>
                  )}
                </div>
              </Link>
            </StyledPetOwner>
)}
          </div>
        </>
      )}

      {deleted && <p>Pet has been deleted</p>}
    </StyledPetDetails>
  );
}

export default PetDetails;

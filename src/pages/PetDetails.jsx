import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import petService from "../services/pet.service";
import { Typography, Button } from "@mui/material";
import { StyledButton } from "../components/styled/Button.styled";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service";

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
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const likePet = async () => {
    try {
      if(liked){
        console.log(liked)
        
        const response = await petService.unlikePet(id);
      } else {
        console.log(liked)
        const response = await petService.likePet(id);

      }


      getPet()
      checkLike()
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
    if(user) {
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
    if (pet && pet.interestedUsers .find(interested => interested  === user._id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  };
  
  useEffect(() => {
    checkEdit();
    checkLike()
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
    <div>
      {pet && (
        <>
          <div>
            <div>
              <img src={pet.image} alt="" />
            </div>

            <h1>{pet.name}</h1>

            <Typography>Gender: {pet.gender ? "male" : "female"}</Typography>

            {pet.age && <Typography>Age: {pet.age}</Typography>}

            {pet.birthDate && (
              <Typography>Birth-date: {pet.birthDate}</Typography>
            )}

            {pet.weight && <Typography>Weight {pet.weight}kg </Typography>}

            {pet.sterilized && (
              <Typography>Sterilized: {pet.sterilized}</Typography>
            )}

            <Typography>Species: {pet.species}</Typography>

            {pet.breed && (
              <Typography>
                Breed of {pet.species}: {pet.breed}
              </Typography>
            )}

            <Typography>Location: {pet.location}</Typography>

            <Typography>
              About {pet.name}: {pet.description}
            </Typography>

            <Link to={`/profile/${pet.owner[0]._id}`} key={pet.owner._id}>
              <Typography>Owner: {pet.owner[0].name}</Typography>
            </Link>

            {/* TO EDIT / DELETE PET IF IT BELONGS TO THE USER: */}

            {canEdit && (
              <>
                <Link to={`/pets/edit/${id}`}>
                  <StyledButton>Edit Pet</StyledButton>
                </Link>
                <StyledButton onClick={deletePet}>Delete Pet</StyledButton>
              </>
            )}

            {/* {pet.owner.includes(user._id) && (
              )} */}

            {/* TO LIKE/UNLIKE PET */}
            {pet && user && (
            <StyledButton
              primary={liked ? "true" : "false"}
              
              onClick={likePet}
            >
              {liked ? "Liked" : "Like"}
            </StyledButton>

            )}
          </div>
        </>
      )}

      {deleted && <p>Pet has been deleted</p>}
    </div>
  );
}

export default PetDetails;

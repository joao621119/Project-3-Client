import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import profileService from "../services/profile.service";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { StyledProfile, StyledForAdoption } from "../components/styled/Profile.styled";
import { Container } from "@mui/system";

function Profile() {
  const { loggedIn, user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  const { id } = useParams();

  const getProfile = async () => {
    try {
      const response = await profileService.getSingleProfile(id);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <StyledProfile>
      {profile && (
        <>
          {profile.image && (
            <div>
              <img src={profile.image} alt="Profile Image" />
            </div>
          )}

          <div>
            <Typography variant="h4">{profile.name}</Typography>

            {profile.gender && (
              <Typography gutterBottom variant="h4" component="div">Gender: {profile.gender}</Typography>
            )}
            {profile.age && (
              <Typography variant="h4">Age: {profile.age}</Typography>
            )}

            {loggedIn ? (
              <>
                <Typography variant="h4">Location: {profile.location}</Typography>

                <Typography variant="h4">Email: {profile.email}</Typography>

                {profile.phone && (
                  <Typography variant="h4">Phone number: {profile.phone}</Typography>
                )}

                <Typography variant="h4">About {profile.name}: {profile.description}</Typography>
              </>
            ) : (
              <>
              {profile.phone && (

                <Typography variant="h4">Phone number: ·········{profile.phone.slice(profile.phone.length - 3)}</Typography>
              )}
              </>
            )}
          </div>
          {!profile.petsForAdoption.length && (
            <Typography variant="h5">{profile.name} has no pets up for adoption</Typography>
          )}

          {profile.petsForAdoption.length > 0 && (
            <>
              <Typography variant="h4">Check out the pets {profile.name} has put up for adoption:{" "}</Typography>
            <StyledForAdoption class="petForAdoptionCard">
              {profile.petsForAdoption.map((pet) => {
                return (
                  <div className="petForAdoptionCard">
                    <Link to={`/pets/${pet._id}`}> 
                      <img class="petImg" src={pet.image} alt="Pet's image" />
                      <Typography variant="h4">{pet.name}</Typography>
                      </Link>
                      <Typography variant="h4">Gender: {pet.gender ? "Male" : "Female"}</Typography>
                      {pet.age && (
                        <Typography variant="h4">Age: {pet.age} years old</Typography>
                      )}
                    
                  </div>
                );
              })}
              </StyledForAdoption>
            </>
          )}

          {profile.likedAssociations.length > 0 && (
            <div>
              <Typography>Check out the associations {profile.name} is interested:{" "}</Typography>
              
              {profile.likedAssociations.map((association) => {
                return (
                  <>
                    <Link to={`/associations/${association._id}`}>
                      <img src={association.image} alt="Association's image" />
                      <p>{association.name}</p>
                      <p>Services: {association.service}</p>
                      <p>📍{association.location}</p>
                    </Link>
                  </>
                );
              })}
            </div>
          )}
        </>
      )}
    </StyledProfile>
  );
}

export default Profile;

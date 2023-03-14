import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import profileService from "../services/profile.service";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { StyledSection } from "../components/styled/Section.styled";


function Profile() {
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

    <StyledSection>
      {profile && (
        <>
          
          <div>
            <img src={profile.image} alt="Profile Image" />
          </div>

          <div>
            <Typography variant="h3">{profile.name}</Typography>
          
            {profile.gender && 
              <Typography gutterBottom variant="body1" component="div">
               {profile.gender}
              </Typography>
            }
            <Typography variant="h3">Age: {profile.age}</Typography>

            <Typography variant="h3">Location: {profile.location}</Typography>

            </div>
            <Typography variant="h3">
             Pets for adoption: {profile.petsForAdoption[0]}
            </Typography>
        
        </>
      )}
    </StyledSection>
  );
}

export default Profile;
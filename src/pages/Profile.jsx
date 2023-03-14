import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import profileService from "../services/profile.service";
import { StyledSection } from "../components/styled/Section.styled";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// css

// components

function Profile() {
  const [profile, setProfile] = useState(null);

  const { id } = useParams();

  const getProfile = async () => {
    try {
      const response = await profileService.getSingleProfile(id);
      setProfile(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      {profile && (
        <>
          <div>
            <img src={profile.image} alt="Profile Image" />

            <Typography variant="h3">{profile.name}</Typography>
          
            {profile.gender && (
              <Typography gutterBottom variant="body1" component="div">
                Female
              </Typography>
            )}
            <Typography variant="h3">Age: {profile.age}</Typography>
            <Typography variant="h3">Location: {profile.location}</Typography>
            <Typography variant="h3">
              About {profile.name}: {profile.description}
            </Typography>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;

/* import React from 'react'

function Profile() {
  return (
    <div>Profile</div>
  )
}

export default Profile */

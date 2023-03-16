import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service";
import { Typography } from "@mui/material";
import { StyledButton } from "../components/styled/Button.styled";
import { Link } from "react-router-dom";
import { StyledUserProfile, StyledPetsForAdoption } from "../components/styled/UsersProfile.styled";

function UsersProfile() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    try {
      const response = await profileService.getSingleProfile(user._id);
      setProfile(response.data);
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
          <StyledUserProfile>
            <div>
              <img src={profile.image} alt="Profile Image" />
            </div>

            <div>
              <Link to={`/profile/edit/${profile._id}`}>
                <StyledButton primary={true}>
                  <Typography variant="h4">Edit Profile</Typography>
                </StyledButton>
              </Link>
            </div>

            <div>
              <Typography variant="h4">{profile.name}</Typography>
              <Typography variant="h4">Gender:{profile.gender}</Typography>
              <Typography variant="h4">Age: {profile.age}</Typography>
              <Typography variant="h4">Location: {profile.location}</Typography>
              <Typography variant="h4">About {profile.description}</Typography>
            </div>

            {profile.petsForAdoption.length > 0 && (
  <>
    <Typography>The pets you've put up for adoption:</Typography>
    <StyledPetsForAdoption>
      {profile.petsForAdoption.map((pet) => {
        return (
          <div key={pet._id}>
            <Link to={`/pets/${pet._id}`}>
              <img src={pet.image} alt={pet.name} />
              <h3>{pet.name}</h3>
              <p>{pet.species}</p>
            </Link>
            <StyledButton variant="outlined">Edit</StyledButton>
          </div>
        );
      })}
    </StyledPetsForAdoption>
  </>
)}
          
            {profile.likedAssociations.length > 0 && (
              <Typography>This are the associations you've liked:</Typography>
            )}
            {profile.likedAssociations.map((association) => {
              return (
                <>
                  <Link to={`/associations/${association._id}`} key={association._id}>
                  <img src={association.image} alt="Association's image" />
                  <h1>{association.name}</h1>
                  <h2>Service: {association.service}</h2>
                  </Link>
                </>
              );
            })}
          </StyledUserProfile>
        </>
      )}
    </div>
  );
}

export default UsersProfile;

import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service";
import { Container, Typography } from "@mui/material";
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
              <Typography variant="h4" gutterBottom>{profile.name}</Typography>
              <Typography variant="h4" gutterBottom>Gender:{profile.gender}</Typography>
              <Typography variant="h4" gutterBottom>Age: {profile.age}</Typography>
              <Typography variant="h4" gutterBottom>Location: {profile.location}</Typography>
              <Typography variant="h4" gutterBottom>About {profile.description}</Typography>
            </div>

            {profile.petsForAdoption.length > 0 && (
  <>
    <Typography variant="h3">The pets you've put up for adoption:</Typography>
    <StyledPetsForAdoption>
      {profile.petsForAdoption.map((pet) => {
        return (
          <Container key={pet._id}>
            <Link to={`/pets/${pet._id}`}>
              <img src={pet.image} alt={pet.name} />
              <Typography variant="h4" gutterBottom>{pet.name}</Typography>
              <Typography variant="h4" gutterBottom>{pet.species}</Typography>
            </Link>
            <StyledButton variant="outlined">Edit</StyledButton>
          </Container>
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
                  <Typography variant="h3">{association.name}</Typography>
                  <Typography variant="h3">Service: {association.service}</Typography>
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

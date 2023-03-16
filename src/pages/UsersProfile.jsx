import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service";
import { Container, Typography } from "@mui/material";
import { StyledButton } from "../components/styled/Button.styled";
import { Link } from "react-router-dom";
import {
  StyledUserProfile,
  StyledPetsForAdoption,
} from "../components/styled/UsersProfile.styled";

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
                  <Typography variant="h5">Edit</Typography>
                </StyledButton>
              </Link>
            </div>

            <div id="infoUserProfile">
              <Typography variant="h4" gutterBottom>
                {profile.name}
              </Typography>
              <Typography variant="h4" gutterBottom>
                Gender: {profile.gender}
              </Typography>
              <Typography variant="h4" gutterBottom>
                Age: {profile.age}
              </Typography>
              <Typography variant="h4" gutterBottom>
                Location: {profile.location}
              </Typography>
              <Typography variant="h4" gutterBottom>
                Your description: {profile.description}
              </Typography>
            </div>

            {profile.petsForAdoption.length > 0 && (
              <>
                <Typography variant="h3">
                  The pets you've put up for adoption:
                </Typography>
                <StyledPetsForAdoption>
                  {profile.petsForAdoption.map((pet) => {
                    return (
                      <Container key={pet._id}>
                        <Link to={`/pets/${pet._id}`}>
                          <div
                            style={{
                              maxWidth: "90%",
                              maxHeight: "400px",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              style={{ width: "100%", height: "auto" }}
                              src={pet.image}
                              alt={pet.name}
                            />
                          </div>
                          <Typography variant="h3" gutterBottom>
                            {pet.name}
                          </Typography>
                          <Typography variant="h4" gutterBottom>
                            Species: {pet.species}
                          </Typography>
                        </Link>
                        <Link to={`/pets/edit/${pet._id}`}>
                          <StyledButton variant="outlined">Edit this pet</StyledButton>
                        </Link>
                      </Container>
                    );
                  })}
                </StyledPetsForAdoption>
              <Link to={"/pets/add"}>
                <StyledButton primary={true}>
                  <Typography variant="h4">Add a pet</Typography>
                </StyledButton>
              </Link>
              </>
            )}


            {profile.interestedInPets.length > 0 && (
              <>
              <StyledPetsForAdoption>
                <Typography variant="h3">
                  The pets you're interested in:
                </Typography>
                  {profile.interestedInPets.map((pet) => {
               
                    return (
                      <Container key={pet._id}>
                        <Link to={`/pets/${pet._id}`}>
                          <div
                            style={{
                              maxWidth: "100%",
                              maxHeight: "400px",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              style={{ width: "100%", height: "auto" }}
                              src={pet.image}
                              alt={pet.name}
                            />
                          </div>
                          <Typography variant="h4" gutterBottom>
                            {pet.name}
                          </Typography>
                          <Typography variant="h4" gutterBottom>
                            {pet.species}
                          </Typography>
                        </Link>
                      </Container>
                    );
                  })}
                </StyledPetsForAdoption>
              </>
            )}

            {/* {profile.likedAssociations.length > 0 && (
              <Typography>This are the associations you've liked:</Typography>
            )}
            {profile.likedAssociations.map((association) => {
              return (
                <>
                  <Link
                    to={`/associations/${association._id}`}
                    key={association._id}
                  >
                    <img src={association.image} alt="Association's image" />
                    <Typography variant="h3">{association.name}</Typography>
                    <Typography variant="h3">
                      Service: {association.service}
                    </Typography>
                  </Link>
                </>
              );
            })} */}
          </StyledUserProfile>
        </>
      )}
    </div>
  );
}

export default UsersProfile;

import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service";
import { Typography } from "@mui/material";
import { StyledButton } from "../components/styled/Button.styled";
import { Link } from "react-router-dom";

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
          <section>
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
              <Typography>The pets you've put up for adoption:</Typography>
            )}
            
            {profile.petsForAdoption.map((pet) => {
              return (
                <>
                  <Link to={`/pets/${pet._id}`} key={pet._id}>
                    <h1>{pet.name}</h1>
                    <h2>{pet.species}</h2>
                    <img src={pet.image} alt="" />
                  </Link>
                </>
              );
            })}

            {profile.interestedInPets.length > 0 && (
              <Typography>This are the pets you're interested in:</Typography>
            )}
            {profile.interestedInPets.map((pet) => {
              return (
                <>
                  <h1>{pet.name}</h1>
                  <h2>{pet.species}</h2>
                  <img src={pet.image} alt="" />
                  <Link to={`/pets/${pet._id}`} key={pet._id}>
              <Typography>{pet.species}: {pet.name}</Typography>
            </Link>
                </>
              );
            })}
          
            {profile.likedAssociations.length > 0 && (
              <Typography>This are the associations you've liked:</Typography>
            )}
            {profile.likedAssociations.map((association) => {
              return (
                <>
                  <Link to={`/pets/${pet._id}`} key={pet._id}>
                  <img src={association.image} alt="Association's image" />
                  <h1>{association.name}</h1>
                  <h2>Service: {association.service}</h2>
                  </Link>
                </>
              );
            })}
          </section>
        </>
      )}
    </div>
  );
}

export default UsersProfile;

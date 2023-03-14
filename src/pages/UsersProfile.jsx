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

            <Typography variant="h4">{profile.interestedInPets[0]}</Typography>
          </section>
        </>
      )}
    </div>
  );
}

export default UsersProfile

import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service";
import { Typography } from "@mui/material";

function UsersProfile() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    try {
      const response = await profileService.getSingleProfile(user._id);
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
            <Typography variant="h3">Gender:{profile.gender}</Typography>
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

export default UsersProfile;
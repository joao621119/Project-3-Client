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
          <Typography>{profile.name}</Typography>

          <img src={profile.image} alt="profile image" />
        </>
      )}
    </div>
  );
}

export default UsersProfile;

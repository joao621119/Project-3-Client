import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import associationService from "../services/associations.service";
import { Typography } from "@mui/material";

function associationDetails() {
  const [association, setAssociation] = useState(null);

  const { id } = useParams();

  const getAssociation = async () => {
    try {
      const response = await associationService.getSingleAssociation(id);
      setAssociation(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAssociation();
  }, []);

  return (
    <div>
      {association && (
        <>
          <div>
            <div>
              <img src={association.image} alt="" />
            </div>
            <h1>{association.name}</h1>
            <Typography variant="h3">Email: {association.email}</Typography>
            <Typography variant="h3">
              Phone number: {association.phone}
            </Typography>
            <Typography variant="h3">
              Social Media: {association.socialMedia}
            </Typography>
            <Typography variant="h3">
              Location: {association.location}
            </Typography>
            <Typography variant="h3">
              Provided services: {association.service}
            </Typography>
            <Typography variant="h3">
              About {association.name}: {association.description}
            </Typography>
          </div>
        </>
      )}
    </div>
  );
}

export default associationDetails;

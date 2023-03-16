import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import associationService from "../services/associations.service";
import { Typography } from "@mui/material";
import { StyledAssociations } from "../components/styled/Associations.styled";

/* import associationsService from "../services/associations.service"; */

function associationDetails() {
  const [association, setAssociation] = useState(null);

  const { id } = useParams();

  const getAssociation = async () => {
    try {
      const response = await associationService.getSingleAssociation(id);
      setAssociation(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAssociation();
  }, []);

  return (
    <div>
      {/* IS THIS CONDITION (association) NECESSARY??? */}
      {association && (
        <>
          <StyledAssociations>
            <div>
              <img src={association.image} alt="Association's image" />
            </div>

            <h1>{association.name}</h1>
            <article className="associationInfo">
              <Typography variant="h4">Email: {association.email}</Typography>

              {association.phone && (
                <Typography variant="h4">
                  Phone number: {association.phone}
                </Typography>
              )}

              {association.socialMedia && (
                <Typography variant="h4">
                  Social Media: {association.socialMedia}
                </Typography>
              )}

              <Typography variant="h4">
                Location: {association.location}
              </Typography>

              <Typography variant="h4">
                Provided services: {association.service}
              </Typography>

              <Typography variant="h4">
                Description: {association.description}
              </Typography>

              {association.usersLikes.length > 0 && (
                <Typography>
                  Liked by {association.usersLikes.length} Users
                </Typography>
              )}
            </article>
          </StyledAssociations>
        </>
      )}
    </div>
  );
}

export default associationDetails;

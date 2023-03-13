import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import associationsService from "../services/associations.service";
import { StyledSection } from "../components/styled/Section.styled";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// css

// components

function Associations() {
  const [associations, setAssociations] = useState([]);

  const getAssociations = async () => {
    try {
      const response = await associationsService.getAllAssociations();

      console.log(response.data);
      setAssociations(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAssociations();
  }, []);

  return (
    <StyledSection>
      <Typography variant="h1" gutterBottom>
        Associations
      </Typography>
      {associations.map((association) => {
        return (
          <>
            {/*  Assign it a key otherwise react will complain if you map ovr an array without a key */}

            <Link to={`/associations/${association._id}`} key={association._id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={association.image}
                    alt="An association"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {association.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      About {association.name}: {association.description}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Location: {association.location}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Email: {association.email}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Service: {association.service}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </>
        );
      })}
    </StyledSection>
  );
}

export default Associations;

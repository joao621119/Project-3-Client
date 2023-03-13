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
      const response = await associationsService.getSingleAssociation(id);
      setAssociation(response.data);
      console.log(response.data)
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
            <img src={association.image} alt="" />
          
          <h1>{association.name}</h1>

          </div>
        </>
      )}
      
    </div>
  );
}

export default associationDetails;

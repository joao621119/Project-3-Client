import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StyledSection } from "../components/styled/Section.styled";
import { ListSection } from "../components/styled/List.styled";
import Search from "../components/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import associationsService from "../services/associations.service";

function AssociationsList() {
  const [items, setItems] = useState([]); // Main array of items
  /* ARE WE USING THIS?: */
  const [showItems, setShowItems] = useState([]); // Filtered array of items (search)

  const getAssociations = async () => {
    try {
      const response = await associationsService.getAllAssociations();
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAssociations();
  }, []);

  const searchItems = (query) => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowItems(filteredItems);
  };
  /* If the showItems array has something inside use it, otherwise use the main items array */
  const itemList = showItems.length ? showItems : items;

  return (
    <Container>

      {/* <Search searchItems={searchItems} /> */}

      <Typography variant="h1" gutterBottom>Associations</Typography>

      <ListSection>
        <Grid container spacing={2}>
          {itemList.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={item._id}>
                <Link to={`/associations/${item._id}`}>
                  <Card sx={{ borderRadius: "16px" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        width="100%"
                        image={item.image}
                        alt={item.name}
                        sx={{
                          objectFit: "cover",
                          position: "relative",
                          borderRadius: "16px 16px 0 0",
                        }}
                      />

                      <CardContent
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          backgroundColor: "rgba(0, 0, 0, 0.7)",
                          color: "white",
                          padding: "10px",
                          borderRadius: "0 0 16px 16px",
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
                        
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="div"
                        >
                          {/* Replace with the relevant fields for the new model */}
                          📍 {item.location}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="div"
                        >
                          {/* Replace with the relevant fields for the new model */}
                          Services: {item.service}
                        </Typography>
                      </CardContent>

                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </ListSection>
    </Container>
  );
}

export default AssociationsList;

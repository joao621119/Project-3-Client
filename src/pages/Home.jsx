import React from "react";
import { Container } from "@mui/system";
import { StyledHome } from "../components/styled/Home.styled";
import { Typography } from "@mui/material";


function Home() {
  return (


    <StyledHome>
    <div id="main-title">
      <Typography variant="h1">Welcome to Pawesome</Typography>
      <Typography>Find your new Best Friend</Typography>
    </div>
      </StyledHome>


  );
}

export default Home;

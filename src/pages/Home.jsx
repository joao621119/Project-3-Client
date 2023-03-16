import React from "react";
import { Container } from "@mui/system";
import { StyledHome } from "../components/styled/Home.styled";


function Home() {
  return (
    <Container>

    <StyledHome>
      <h1>Welcome to Pawesome</h1>

      <p>The best place to find a new Best Friend!</p>
      </StyledHome>

    </Container>
  );
}

export default Home;

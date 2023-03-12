import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import styled from "styled-components";
import { StyledButton } from "./styled/Button.styled";
import { StyledNavBar } from "./styled/Navbar.styled";
import { Container } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  return (
    <Container>
      <StyledNavBar>
        {/* If the user is logged in do the first option. If the logged in is false (after the colon :) */}
        {loggedIn ? (
          <>
          <Link to="/">
              <PetsIcon sx={{ fontSize: "3rem", color: "#F79489" }} />
            </Link>
            <span>Hello {user.name}</span>
            <Link to="/pets">
              <StyledButton>Pets</StyledButton>
            </Link>

            <Link to="/associations">
              <StyledButton>Associations</StyledButton>
            </Link>

            <Link to="/profile">
              <StyledButton>Profile</StyledButton>
            </Link>

            <StyledButton onClick={logout} primary={true}>
              Logout
            </StyledButton>
          </>
        ) : (
          <>
            <Link to="/">
              <PetsIcon sx={{ fontSize: "3rem", color: "#F79489" }} />
            </Link>
            <Link to="/pets">
              <StyledButton>Pets</StyledButton>
            </Link>
            <Link to="/associations">
              <StyledButton>Associations</StyledButton>
            </Link>
            <Link to="/signup">
              <StyledButton primary={true}>Signup</StyledButton>
            </Link>
            <Link to="/login">
              <StyledButton primary={true}>Login</StyledButton>
            </Link>
          </>
        )}
      </StyledNavBar>
    </Container>
  );
}

export default Navbar;

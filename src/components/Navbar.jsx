import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import styled from "styled-components";
import { StyledButton } from "./styled/Button.styled";
import { StyledNavBar } from "./styled/Navbar.styled";
import { Container, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <StyledNavBar>
        {/* If the user is logged in do the first option. If the logged in is false (after the colon :) */}
        <Link to="/">
          <PetsIcon sx={{ fontSize: "3rem", color: "#F79489" }} />
        </Link>
        <MenuIcon
          sx={{ fontSize: "3rem", color: "#F79489", display: "none" }}
          onClick={handleMenuToggle}
        />

        {loggedIn && (
          <>
            <Typography variant="h5">Welcome back, {user.name}!</Typography>
          </>
        )}

        <div
          className={showMenu ? "menu-container show" : "menu-container"}
        >
          <Link to="/pets" onClick={handleMenuToggle}>
            <StyledButton>
              <Typography variant="h5">Find a Pet</Typography>
            </StyledButton>
          </Link>

          <Link to="/associations" onClick={handleMenuToggle}>
            <StyledButton>
              <Typography variant="h5">Pet Associations</Typography>
            </StyledButton>
          </Link>

          {loggedIn ? (
            <>
              <Link to="/profile" onClick={handleMenuToggle}>
                <StyledButton>
                  <Typography variant="h5">Your Profile</Typography>
                </StyledButton>
              </Link>

              <StyledButton onClick={logout} primary={true}>
                Logout
              </StyledButton>
            </>
          ) : (
            <>
              <Link to="/signup" onClick={handleMenuToggle}>
                <StyledButton primary={true}>
                  <Typography variant="h5">Signup</Typography>
                </StyledButton>
              </Link>

              <Link to="/login" onClick={handleMenuToggle}>
                <StyledButton primary={true}>
                  <Typography variant="h5">Login</Typography>
                </StyledButton>
              </Link>
            </>
          )}
        </div>
      </StyledNavBar>
    </Container>
  );
}

export default Navbar;
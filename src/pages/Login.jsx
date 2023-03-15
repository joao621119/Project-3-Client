import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import { AuthContext } from "../context/auth.context";

import { StyledForm } from "../components/styled/Form.styled";
import { StyledButton } from "../components/styled/Button.styled";
import { StyledSection } from "../components/styled/Section.styled";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { Container, Typography } from "@mui/material";
import { height } from "@mui/system";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const { authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        { email, password }
      );

      localStorage.setItem("authToken", response.data.authToken);

      await authenticateUser();

      const notify = () => {
        toast.success("Login successful!", {
          position: toast.POSITION.TOP_CENTER,
          icon: "✅",
          transition: Zoom,
        });
      };
      navigate("/");
      notify();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container sx={{ height: "100vh" }}>
      
      <StyledSection>
        <Typography variant="h1" gutterBottom>
          Log in
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="email">
            <Typography variant="h3">Email</Typography>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />

          <label htmlFor="password">
            <Typography variant="h3">Password</Typography>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />

          <StyledButton type="submit" primary={true}><Typography variant="h5">Login</Typography></StyledButton>
        </StyledForm>

        <Typography>Don't have an account?</Typography>
        
        <Link to="/signup">Sign up</Link>
      </StyledSection>
    </Container>
  );
}

export default Login;

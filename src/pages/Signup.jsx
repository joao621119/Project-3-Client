import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { StyledForm } from "../components/styled/Form.styled";
import { StyledButton } from "../components/styled/Button.styled";
import { StyledSection } from "../components/styled/Section.styled";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

import {
  Container,
  TextareaAutosize,
  Typography,
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { height } from "@mui/system";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [userType, setUserType] = useState("valid");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleUserType = (e) => setUserType(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        { name, email, password, description, userType }
      );

      const notify = () => {
        toast.success("Sign up successful!", {
          position: toast.POSITION.TOP_CENTER,
          icon: "✅",
          transition: Zoom,
        });
      };
      navigate("/login");
      notify();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <StyledSection>
        <Typography variant="h1" gutterBottom>
          Signup
        </Typography>

        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="name">
            {" "}
            <Typography variant="h3">Name</Typography>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
          />

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

          <label htmlFor="description">
            <Typography variant="h3">Description</Typography>
          </label>
          <TextareaAutosize
            type="string"
            name="description"
            id="description"
            value={description}
            onChange={handleDescription}
          />

          <Box id="radioBtnContainer">
            <FormControl>
              <FormLabel id="userTypeLabel">
                <Typography variant="h4">User Type:</Typography>
              </FormLabel>
              <RadioGroup
                name="userType"
                value={userType}
                onChange={handleUserType}
                row
                aria-labelledby="userTypeLabel"
              >
                <FormControlLabel
                  control={<Radio color="secondary" />}
                  label={<Typography variant="h5">Adopter</Typography>}
                  value="valid"
                />
                <FormControlLabel
                  control={<Radio color="secondary" />}
                  label={<Typography variant="h5">Donator</Typography>}
                  value="invalid"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <StyledButton type="submit" primary={true}>
            <Typography variant="h5">Create Account</Typography>
          </StyledButton>
        </StyledForm>

        <Typography>Already have an account?</Typography>
        <Link to="/login">
          <Typography>Login</Typography>
        </Link>
      </StyledSection>
    </Container>
  );
}

export default Signup;

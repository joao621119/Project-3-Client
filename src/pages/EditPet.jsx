import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { StyledForm } from "../components/styled/Form.styled";
import { StyledButton } from "../components/styled/Button.styled";
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

function EditPet() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState(true);
  /* const [sterilized, setSterilized] = useState(true); */
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleSpecies = (e) => setSpecies(e.target.value);
  const handleBreed = (e) => setBreed(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleWeight = (e) => setWeight(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  /* const handleSterilized = (e) => setSterilized(e.target.value); */
  const handleDescription = (e) => setDescription(e.target.value);
  /* const handleImage = (e) => setImage(e.target.value); */

  const navigate = useNavigate();

  const handleFileUpload = async (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("image", e.target.files[0]);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/upload`,
        uploadData
      );
      setImage(response.data.fileUrl);
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }
  };

  const { id } = useParams();

  const getPet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/pets/${id}`
      );
      setName(response.data.name);
      setSpecies(response.data.species);
      setBreed(response.data.breed);
      setLocation(response.data.location);
      setAge(response.data.age);
      setWeight(response.data.weight);
      setImage(response.data.image);
      setGender(response.data.gender);
      /* setSterilized(response.data.sterilized); */
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePet = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/pets/edit/${id}`);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPet();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name,
      species,
      breed,
      age,
      weight,
      gender,
      /* sterilized, */
      image,
      description,
      location,
    };

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/pets/edit/${id}`, body);
      navigate(`/profile`); // Redirect
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <section>
      <h1>Edit {id.name}:</h1>

      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="image">Image:</label>
        <img src={image}/>
        <input
          type="file"
          name="image"
          placeholder="Profile Image"
          onChange={handleFileUpload}
          encType="multipart/form/data"
        />
        
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />

        <label htmlFor="species">Type of animal:</label>
        <input
          type="text"
          name="species"
          id="species"
          value={species}
          onChange={handleSpecies}
        />

        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          name="breed"
          id="breed"
          value={breed}
          onChange={handleBreed}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={handleAge}
        />

        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          name="weight"
          id="weight"
          value={weight}
          onChange={handleWeight}
        />

        <Box id="radioBtnContainer">
          <FormControl>
            <FormLabel id="userTypeLabel">
              <Typography variant="h4">Gender:</Typography>
            </FormLabel>
            <RadioGroup
              name="gender"
              value={gender}
              onChange={handleGender}
              row
              aria-labelledby="GenderLabel"
            >
              <FormControlLabel
                control={<Radio color="secondary" />}
                label={<Typography variant="h5">Male</Typography>}
                value="true"
              />
              <FormControlLabel
                control={<Radio color="secondary" />}
                label={<Typography variant="h5">Female</Typography>}
                value="false"
              />
            </RadioGroup>
          </FormControl>
        </Box>

       {/*  <label htmlFor="sterilized">Sterilized:</label>
        <input
          type="radio"
          name="sterilized"
          id="sterilized"
          onChange={handleSterilized}
        /> */}


        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={handleDescription}
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          value={location}
          onChange={handleLocation}
        />

        <StyledButton variant="primary" type="submit">
          Save Changes
        </StyledButton>
      </StyledForm>

      <StyledButton variant="primary" onClick={deletePet}>
        Delete This Pet
      </StyledButton>
    </section>
  );
}

export default EditPet;

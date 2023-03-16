import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import petService from "../services/pet.service";
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

function AddPet() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(null);
  /* const [birthDate, setBirthDate] = useState(""); */
  const [gender, setGender] = useState(true);
  /* const [sterilized, setSterilized] = useState(true); */
  const [weight, setWeight] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleSpecies = (e) => setSpecies(e.target.value);
  const handleBreed = (e) => setBreed(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  /* const handleBirthDate = (e) => setBirthDate(e.target.value); */
  const handleGender = (e) => setGender(e.target.value);
  /* const handleSterilized = (e) => setSterilized(e.target.value); */
  const handleWeight = (e) => setWeight(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  /* const handleImage = (e) => setImage(e.target.value); */

  const navigate = useNavigate();

  /*   const storedToken = localStorage.getItem("authToken"); */
  /* const handleFileUpload = (e) => {
    const uploadData = new FormData();
    console.log('aa')
    uploadData.append("image", e.target.files[0]);
    petService
      .uploadImage(uploadData)
      .then((response) => {
        setImage(response.fileUrl);
        console.log('aa')
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  }; */

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name,
      species,
      breed,
      location,
      age,
      weight,
      image,
      gender,
      /* sterilized, */
      /* birthDate, */
      description,
    };

    try {
      await petService.createPet(body);
      navigate("/profile"); // Redirect to profile once pet is added
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Put up a Pet for Adoption!</h1>

      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          name="image"
          placeholder="What does your bud look like?"
          onChange={handleFileUpload}
          encType="multipart/form/data"
        />
        
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ex: Mr. Whiskers"
          onChange={handleName}
        />

        <label htmlFor="species">Type of animal:</label>
        <input
          type="text"
          name="species"
          id="species"
          placeholder="Cat, Dog, Bird or Rabbit"
          onChange={handleSpecies}
        />

        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          name="breed"
          id="breed"
          placeholder="Ex: Mutt"
          onChange={handleBreed}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="In years"
          onChange={handleAge}
        />

        {/* <label htmlFor="birthDate">Birth Date:</label>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          placeholder="mm/dd/yyyy"
          onChange={handleBirthDate}
        /> */}

        {/* <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          name="gender"
          id="gender"
          value={true}
          onChange={handleGender}
        />
        <input
          type="radio"
          name="gender"
          id="female"
        value={false}
          onChange={handleGender}
        /> */}

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

   {/*      <label htmlFor="sterilized">Sterilized:</label>
        <input
          type="radio"
          name="sterilized"
          value="true"
          id="sterilized"
          onChange={handleSterilized}
        /> */}

        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="In Kg"
          onChange={handleWeight}
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Where can your pet be picked up?"
          onChange={handleLocation}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Tell us about the new addition to our family!"
          onChange={handleDescription}
        />


        <StyledButton variant="primary" type="submit">
          Add this Pet
        </StyledButton>
      </StyledForm>
    </section>
  );
}

export default AddPet
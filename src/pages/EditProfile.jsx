import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { StyledForm } from "../components/styled/Form.styled";
import { StyledButton } from "../components/styled/Button.styled";
import { AuthContext } from "../context/auth.context";

function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");

  const { logout } = useContext(AuthContext);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleGender = (e) => setGender(e.target.value);

  const navigate = useNavigate();

  const { id } = useParams();

  const getProfile = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/profile/${id}`
      );
      setName(response.data.name);
      setEmail(response.data.email);
      setDescription(response.data.description);
      setGender(response.data.gender);
      setLocation(response.data.location);
      setAge(response.data.age);
      setPhone(response.data.phone);
      setImage(response.data.image);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProfile = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/profile/edit/${id}`);
      logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      description,
      email,
      location,
      phone,
      gender,
      image,
      age,
    };
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/profile/edit/${id}`,
        body
      );
      navigate(`/profile`); // Redirect
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Edit Profile:</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={handleDescription}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={location}
          onChange={handleLocation}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={handleAge}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          id="phone"
          value={phone}
          onChange={handlePhone}
        />

        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          name="gender"
          id="gender"
          value={gender}
          onChange={handleGender}
        />

        {/* label for image */}

        <StyledButton primary={true} type="submit">
          Save Changes
        </StyledButton>
      </StyledForm>

      <StyledButton primary={true} onClick={deleteProfile}>
        Delete your Profile
      </StyledButton>
    </section>
  );
}

export default EditProfile;

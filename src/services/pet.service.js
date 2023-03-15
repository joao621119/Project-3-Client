import axios from "axios";

class PetService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005",
    });
    // here we intercept every request that uses this api and call a middleware function
    this.api.interceptors.request.use((config) => {
      // inside this middleware function the first thing we do is get the token from the localstorage

      const storedToken = localStorage.getItem("authToken");

      // if there is a token we're going to add it to the headers of the request
      if (storedToken) {
        // here we pass to the headers an object with Authorization and the Bearer token
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // Here we can create the methods to connect to the API

  // Get All Pets
  getAllPets = () => {
    return this.api.get("/pets");
    // the line above is equivalent to:
    //axios.get(`${import.meta.env.VITE_API_URL}/pets`)
  };

  /* uploadImage = (file) => {
    return this.api
      .post("/upload", file)
      .then((res) => res.data)
      .catch('a');
  }; */

  //Create a pet
  // body refers to the object
  createPet = (body) => {
    return this.api.post("/pets/add", body);
  };
  // Get single pet
  getSinglePet = (id) => {
    return this.api.get(`/pets/${id}`);
  };

  // Edit a pet
  editSinglePet = (id, body) => {
    return this.api.put(`/pets/edit/${id}`, body);
  };

  // Delete a pet
  deletePet = (id) => {
    return this.api.delete(`/pets/edit/${id}`);
  };

  // Get single profile
  getSingleProfile = (id) => {
    return this.api.get(`/profile/${id}`);
  };

  // Like a pet
  likePet = (id) => {
    return this.api.put(`/pets/like/${id}`);
  };
  // Like a pet
  unlikePet = (id) => {
    return this.api.put(`/pets/unlike/${id}`);
  };
}

const petService = new PetService();

export default petService;

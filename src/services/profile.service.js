import axios from "axios";

class ProfileService {
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

  // Get All Profiles
  getAllProfiles = () => {
    return this.api.get("/profiles");
    // the line above is equivalent to:
    //axios.get(`${import.meta.env.VITE_API_URL}/pets`)
  };

  // Get single profile
  getSingleProfile = (id) => {
    return this.api.get(`/profile/${id}`);
  };

  // Edit own profile
  editOwnProfile = (body) => {
    return this.api.put(`/profile`, body);
  };

  // Delete a pet
  deleteOwnProfile = (id) => {
    return this.api.delete(`/profile`);
  };
}

const profileService = new ProfileService();

export default profileService;

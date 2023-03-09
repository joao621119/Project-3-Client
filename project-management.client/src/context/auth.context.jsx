import { useState, useEffect, createContext } from "react";
import axios from "axios";
// Initialize a new context
const AuthContext = createContext();
// We need to pass props to use props. children
function AuthWrapper(props) {
  const [loggedIn, setLoggedIn] = useState(false); // Initial value of the is logged in state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // functions and methods

  const authenticateUser = async () => {
    // check for a token
    const storedToken = localStorage.getItem("authToken");

    // if the token exists
    if (storedToken) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/verify`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        // here we know that response is okay so we can update the states
        setLoggedIn(true);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        // here we know we got an  error
        setLoggedIn(false);
        setUser(null);
        setLoading(false);
      }
    } else {
      // else there is no token and no error
      setLoggedIn(false);
      setUser(null);
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, user, loading, authenticateUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* If the user is logged in do the first option. If the logged in is false (after the colon :) */}
      {loggedIn ? (
        <>
          <span>Hello {user.name}</span>
          <Link to="/pets"> Pets</Link>
          <Link to="/associations"> Associations</Link>
          <Link to="/profile"> Profile</Link>

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/pets"> Pets</Link>
          <Link to="/associations"> Associations</Link>
          <Link to="/signup"> Signup</Link>
          <Link to="/login"> Login</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;

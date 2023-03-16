import React from 'react'
import { Link } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";

function Footer() {
  return (
    <footer id="footertag">
      <div>
        <p>About Pawesome</p>
        <p>Pawesome is a React Web Application destined for people looking to adopt and give pets up for adoption.
          This is our third project made during our IronHack boot camp.</p>
          <p>Mar-2023</p>
      </div>

      <div>
        <Link to="/">
          <PetsIcon sx={{ fontSize: "3rem", color: "#F79489" }} />
        </Link>
        <p>Contact Us:</p>
        <p>+351 251 928 985</p>
        <p>pawesome@pets.com</p>
      </div>
    </footer>
  )
}

export default Footer
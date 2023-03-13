import "./App.css";
import { Routes, Route } from "react-router-dom";

// Importing Components:
import Private from "./components/Private";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Importing Pages:
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UsersProfile from "./pages/UsersProfile";
import Profile from "./pages/Profile";
import Pets from "./pages/Pets";
import PetDetails from "./pages/PetDetails";
import Associations from "./pages/Associations";
import AssociationDetails from "./pages/AssociationDetails";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { GlobalStyled } from "./components/styled/Global.styled";

function App() {
  return (
    <div className="App">
      <GlobalStyled />

      <ToastContainer />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/associations" element={<Associations />} />
        <Route path="/associations/:id" element={<AssociationDetails />} />
        <Route
          path="/profile"
          element={
            <Private>
              <UsersProfile />
            </Private>
          }
        />
        <Route path="/profile/:id" element={<Profile />} />
        {/* <Route
          path="/projects"
          element={
            <Private>
              <Projects />
            
            </Private>
          }
        /> */}
        {/* Same as Project details deconstruction: */}
        {/*     <Route path="/projects/:id" element={<ProjectDetails />} /> */}
        {/*        <Route path="/projects/new" element={<AddProject />} /> */}
        {/* It needs to be different than project details: */}
        {/*      <Route path="/projects/edit/:id" element={<EditProject />} /> */}
        <Route path="/signup" element={<Signup />} />{" "}
        {/* Change signup and login like projects for anon */}
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

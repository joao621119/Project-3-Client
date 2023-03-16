import "./App.css";
import { Routes, Route } from "react-router-dom";

// Importing Components:
import Private from "./components/Private";
import Navbar from "./components/Navbar";
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
import EditProfile from "./pages/EditProfile";
import EditPet from "./pages/EditPet";
import AddPet from "./pages/AddPet";
//Styles:
import { GlobalStyled } from "./components/styled/Global.styled";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

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
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />{" "}

        {/* Private routes: */}
        <Route
          path="/profile"
          element={
            <Private>
              <UsersProfile />
            </Private>
          }
        />
        
        <Route
          path="/profile/edit/:id"
          element={
            <Private>
              <EditProfile />
            </Private>
          }
        />
        
        <Route path="/pets/edit/:id" element={<EditPet />} />
        <Route path="/pets/add" element={<AddPet />} />
        
      </Routes>

    </div>
  );
}

export default App;

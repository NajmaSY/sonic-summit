import Schedule from "../pages/Schedule";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function App() {
  const [artists, setArtists] = useState([]);

  async function getArtists() {
    const API = `http://localhost:8080/artists`;
    const res = await axios.get(API);
    setArtists(res.data);
  }

  const { user, isAuthenticated, isLoading } = useAuth0();

  const admins = ["sarahibarron@hotmail.co.uk"];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      {isAuthenticated && (
        <div>
          <Profile />
          <LogoutButton />
        </div>
      )}
      {!isAuthenticated && <LoginButton />}

      {admins.includes(user?.email) && <p>can put admin stuff in here</p>}

      <header>
        <h1>Festival App</h1>
      </header>

      <Routes>
        <Route
          path="/"
          element={<Home artists={artists} setArtists={setArtists} />}
        />
      </Routes>

      <footer>
        <p>&copy: Sonic Summit</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;

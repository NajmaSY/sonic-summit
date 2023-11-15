import MySchedule from "./pages/MySchedule";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [artists, setArtists] = useState([]);

  const admins = ["sarahibarron@hotmail.co.uk", "najmasy20@gmail.com"];

  useEffect(() => {
    getArtists();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  async function getArtists() {
    const API = `http://localhost:8080/artists`;
    const res = await axios.get(API);
    setArtists(res.data);
  }

  async function deleteArtist(id) {
    const check = confirm("Are you sure you want to delete this artist?");
    if (check) {
      const API = `http://localhost:8080/artists/${id}`;
      await axios.delete(API);
      alert("This artist has been deleted.");
      getArtists();
    }
  }

  return (
    <BrowserRouter>
      <header className="header">
        <nav>
          <ul>
            <li className="loginSection">
              <a href="#login" className="navBar">
                {isAuthenticated && (
                  <div className="navBar">
                    <Profile />
                    <LogoutButton />
                  </div>
                )}
                {!isAuthenticated && <LoginButton />}
              </a>
            </li>
            <li>
              <a href="#artists">Artists</a>
            </li>
            <li>
              <a href="#schedule">My Schedule</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#book">Book</a>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              artists={artists}
              setArtists={setArtists}
              deleteArtist={deleteArtist}
            />
          }
        />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/MySchedule" element={<MySchedule />} />
      </Routes>

      <footer>
        <p>&copy: Sonic Summit</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;

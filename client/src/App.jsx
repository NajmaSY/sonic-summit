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

  const admins = ["sarahibarron@hotmail.co.uk", "najmasy20@gmail.com"];

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtists();
  }, []);

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
      <header>
        {isAuthenticated && (
          <div>
            <Profile />
            <LogoutButton />
          </div>
        )}
        {!isAuthenticated && <LoginButton />}

        {admins.includes(user?.email) && <p>can put admin stuff in here</p>}

        <h1>Sonic Summit</h1>
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

import Schedule from "../pages/Schedule";
import "./App.css";
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
  return (
    <BrowserRouter>
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

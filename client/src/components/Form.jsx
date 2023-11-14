import { useState } from "react";
import axios from "axios";

export default function Form({ artists, setArtists, artist, setArtist }) {
  const [formData, setFormData] = useState(
    artist ?? {
      name: "",
      imageUrl: "",
      description: "",
      stage: "",
      stageTime: 1200,
      favourite: false,
      youtube: "",
      instagram: "",
      facebook: "",
      rating: 5,
    }
  );

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function addArtist(event) {
    event.preventDefault();
    const API = "http://localhost:8080/artists";
    const res = await axios.post(API, formData);
    setArtists([...artists, res.data]);
  }

  async function updateArtist(event) {
    event.preventDefault();
    const API = `http://localhost:8080/artists/${artist._id}`;
    await axios.put(API, formData);
    setArtist(formData);
  }

  return (
    <form onSubmit={artist?.name ? updateArtist : addArtist}>
      <input
        name="name"
        placeholder="name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        name="imageUrl"
        placeholder="imageUrl"
        onChange={handleChange}
        value={formData.imageUrl}
      />
      <input
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={formData.description}
      />
      <input
        name="stage"
        placeholder="stage"
        onChange={handleChange}
        value={formData.stage}
      />
      {/*
      stageTime: "",
      favourite: false,
      youtube: "",
      instagram: "",
      facebook: "",
      rating: ""*/}
      <input
        name="stageTime"
        placeholder="stageTime"
        onChange={handleChange}
        checked={formData.stageTime}
      />
      <input
        name="favourite"
        placeholder="favourite"
        onChange={handleChange}
        checked={formData.favourtie}
      />
      <input
        name="youtube"
        placeholder="youtube"
        onChange={handleChange}
        checked={formData.youtube}
      />
      <input
        name="instagram"
        placeholder="instagram"
        onChange={handleChange}
        checked={formData.instagram}
      />
      <input
        name="facebook"
        placeholder="facebook"
        onChange={handleChange}
        checked={formData.facebook}
      />
      <input
        name="rating"
        placeholder="rating"
        onChange={handleChange}
        checked={formData.rating}
      />
      <button>{artist?.name ? "Update Artist" : "Add Artist"}</button>
    </form>
  );
}

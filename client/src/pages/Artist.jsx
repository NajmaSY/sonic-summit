import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

export default function Artist() {
  const [artist, setArtist] = useState({});

  const params = useParams();

  useEffect(() => {
    getArtist();
  }, []);

  async function getArtist() {
    const API = `http://localhost:8080/artists?_id=${params.id}`;
    try {
      const res = await axios.get(API);
      setArtist(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h2>{artist.name}</h2>
      <img src={artist.imgUrl} />
      <p>{artist.description}</p>
      {artist.name && <Form artist={artist} setArtist={setArtist} />}
    </div>
  );
}

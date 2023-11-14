import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

export default function Artist() {
  const [artist, setartist] = useState({});

  const params = useParams();

  useEffect(() => {
    getartist();
  }, []);

  async function getartist() {
    const API = `http://localhost:8080/artists?_id=${params.id}`;
    const res = await axios.get(API);
    setartist(res.data[0]);
  }

  return (
    <div>
      <h2>{artist.name}</h2>
      <img src={artist.imgUrl} />
      <p>{artist.description}</p>
      {artist.name && <Form artist={artist} setartist={setartist} />}
    </div>
  );
}

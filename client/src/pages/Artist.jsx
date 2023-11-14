import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import youtubeIcon from "../assets/youtube.png";
import facebookIcon from "../assets/facebook.png";
import instaIcon from "../assets/insta.png";
import liked from "../assets/liked.png";
import notLiked from "../assets/notliked.png";

export default function Artist() {
  const [artist, setArtist] = useState({});
  const [isError, setIsError] = useState(false);
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
      setIsError(true);
    }
  }

  if (isError) {
    return <p>Woops</p>;
  }

  return (
    <div>
      <h2>{artist.name}</h2>
      {artist.youtube && (
        <a href={artist.youtube} target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="youtube link" />
        </a>
      )}
      {artist.facebook && (
        <a href={artist.facebook} target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} />
        </a>
      )}
      {artist.instagram && (
        <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
          <img src={instaIcon} />
        </a>
      )}
      <img src={artist.imageUrl} />
      <p>FAVOURITE THIS ARTIST: {artist.favourite ? liked : notLiked}</p>
      <p>ABOUT: {artist.description}</p>
      <p>STAGE: {artist.stage}</p>
      <p>STAGE TIME: {artist.stageTime}</p>
      {artist.name && <Form artist={artist} setArtist={setArtist} />}
      <p>LISTEN HERE: </p>
      <iframe
        width="560"
        height="315"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        src={artist.youtube}
      ></iframe>
    </div>
  );
}

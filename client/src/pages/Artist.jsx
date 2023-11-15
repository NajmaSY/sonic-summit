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
    <div className="newArtist">
      <h2 className="artName">{artist.name}</h2>
      {artist.youtube && (
        <a
          href={artist.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="artYoutube"
        >
          <img src={youtubeIcon} alt="youtube link" className="yTicon" />
        </a>
      )}
      {artist.facebook && (
        <a
          href={artist.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="artFacebook"
        >
          <img src={facebookIcon} className="fBicon" />
        </a>
      )}
      {artist.instagram && (
        <a
          href={artist.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="artInsta"
        >
          <img src={instaIcon} className="iTicon" />
        </a>
      )}
      <img src={artist.imageUrl} className="artImage" />
      <p className="favArt">
        FAVOURITE THIS ARTIST: {artist.favourite ? liked : notLiked}
      </p>
      <p className="aboutArt">ABOUT: {artist.description}</p>
      <p className="aboutArt">STAGE: {artist.stage}</p>
      <p className="timeArt">STAGE TIME: {artist.stageTime}</p>
      {artist.name && (
        <Form artist={artist} setArtist={setArtist} className="artForm" />
      )}
      <p className="artListen">LISTEN HERE: </p>
      <iframe
        width="560"
        height="315"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        src={artist.youtube}
        className="artVideo"
      ></iframe>
    </div>
  );
}

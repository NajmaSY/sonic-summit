import "../Artist.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import Yt from "../assets/yt.png";
import Fb from "../assets/fb.png";
import Ig from "../assets/ig.png";
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
    <div className="artistContainer">
      <div className="artistContents">
        <div className="groupOne">
          <div className="headerItem">
            <h2>{artist.name}</h2>
          </div>

          <div>
            <img src={artist.imageUrl} className="imageItem" />
          </div>
          <div className="socials">
            {artist.youtube && (
              <a
                href={artist.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Yt} alt="youtube link" className="iconItem" />
              </a>
            )}
            {artist.facebook && (
              <a
                href={artist.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Fb} className="iconItem" />
              </a>
            )}
            {artist.instagram && (
              <a
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Ig} className="iconItem" />
              </a>
            )}
          </div>
        </div>
        <div className="aboutItem">
          <p>
            FAVOURITE THIS ARTIST:{" "}
            <img
              src={artist.favourite ? liked : notLiked}
              alt="heart"
              className="heart"
            />
          </p>
          <p>ABOUT: {artist.description}</p>
          <p>STAGE: {artist.stage}</p>
          <p>STAGE TIME: {artist.stageTime}</p>
          <p>FAVOURITES: {artist.favourite}</p>
          <p>RATING: {artist.rating}</p>
        </div>

        <div>
          <p>LISTEN HERE: </p>
          <iframe src={artist.youtube} className="listenItem"></iframe>
        </div>
        <div className="form">
          {artist.name && <Form artist={artist} setArtist={setArtist} />}
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import Form from "../components/Form";
import Logo from "../assets/logo.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import liked from "../assets/liked.png";
import notLiked from "../assets/notliked.png";
import { useState } from "react";
import axios from "axios";

export default function Home({ artists }) {
  const [favourite, setFavourite] = useState({});

  function toggleFav(artistID) {
    console.log("clicking!");
    try {
      const userId = "something";
      let response = axios.put(
        `http://localhost:8080/artists/${artistID}/favourite`,
        userId
      );
      let updatedArtist = response.data;

      const updatedArtists = artists.map((artist) => {
        console.log(artist);
        // check through artist and flip favourites value to opposite of whatever it is now.
        if (artistID === artist._id) {
          return updatedArtist;
        }
        return artist;
      });
      setFavourite(updatedArtists);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(artists);
  return (
    //header in first
    <>
      <img src={Logo} alt="" />
      <button>Book Your Spot</button>
      <a id="artists"></a>
      <div className="artistSection">
        <h2>Artists</h2>
        {artists.map((artist) => (
          <div key={artist._id} className="artistContainer">
            <Link to={`/artist/${artist._id}`}>
              <img src={artist.imageUrl} className="image-carosel" />
              <h2 className="artist-name-carosel">{artist.name}</h2>
            </Link>

            <button onClick={() => toggleFav(artist._id)}>
              <img src={artist.favourite ? liked : notLiked} alt="heart" />
            </button>
          </div>
        ))}
      </div>

      <div className="scheduleSection">
        <table>
          <tbody>
            <tr>
              <td>MAIN STAGE</td>
              <td>ARTIST</td>
              <td>SECOND STAGE</td>
              <td>ARTIST</td>
            </tr>
            <tr>
              <td>22:00</td>
              <td>Gorillaz</td>
              <td>21:30</td>
              <td>Sharon Van Etten</td>
            </tr>
            <tr>
              <td>21:00</td>
              <td>Björk</td>
              <td>20:30</td>
              <td>Portishead</td>
            </tr>
            <tr>
              <td>20:00</td>
              <td>Beyonce</td>
              <td>19:30</td>
              <td>Ed Sheeran</td>
            </tr>
            <tr>
              <td>19:00</td>
              <td>The Killers</td>
              <td>18:30</td>
              <td>Dido</td>
            </tr>
            <tr>
              <td>18:00</td>
              <td>The Weekend</td>
              <td>17:30</td>
              <td>Mazzy Star</td>
            </tr>
            <tr>
              <td>17:00</td>
              <td>London Grammar</td>
              <td>16:30</td>
              <td>Nickelback</td>
            </tr>
          </tbody>
        </table>
      </div>
      <a id="about"></a>
      <div className="aboutSection">
        <h2>About</h2>
        <h3> Welcome to Sonic Summit - Where Music Meets the Mountains!</h3>

        <h4>Our Story</h4>
        <p>
          Sonic Summit is not just a festival; it's a celebration of the
          harmonious blend of nature and music. Nestled in the heart of the
          majestic Cheviot Hills, Sonic Summit invites music enthusiasts from
          all walks of life to come together for an unforgettable experience.
        </p>

        <h4>The Experience </h4>
        <p>
          Immerse yourself in the enchanting melodies that resonate through the
          mountain air. Sonic Summit is more than just a music festival; it's a
          sonic journey that transcends boundaries and connects souls. As the
          sun sets behind the peaks, the stage comes alive with a diverse lineup
          of talented artists spanning various genres.
        </p>
        <h3>Get in touch</h3>
        <p>Email: Phone:</p>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31119.385489286!2d-2.404818897800208!3d55.3684140520141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487d8ed9a3a41967%3A0xfb85d138cda28d66!2sThe%20Cheviot%20Hills!5e0!3m2!1sen!2suk!4v1699963731287!5m2!1sen!2suk"
          width="400"
          height="300"
          style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
      <a id="book"></a>
      <div className="bookingSection">
        <img src="" alt="" />
        <h1>Save Your Spot</h1>
        <form action=""></form>
        <button></button>
      </div>
    </>
  );
}

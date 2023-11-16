import { Link } from "react-router-dom";
import Form from "../components/Form";
import Logo from "../assets/logo.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Liked from "../assets/liked.png";
import notLiked from "../assets/notliked.png";
import { useState } from "react";
import axios from "axios";
import Profile from "../components/Profile";

export default function Home({ artists }) {
  const [favouriteArtists, setFavouriteArtists] = useState({});

  const toggleFav = (artistId) => {
    //check if artistID is in favourites
    const isFavourited = favouriteArtists[artistId];

    setFavouriteArtists({ ...favouriteArtists, [artistId]: !isFavourited });

    //send updated favourites to server
    axios.put(`/artists/${artistId}/favourite`, {
      email: "user@example.com",
      likes: Object.keys(favouriteArtists).filter((id) => favouriteArtists[id]),
    });
  };
  return (
    //header in first
    <>
      <img src={Logo} alt="" />
      <button>Book Your Spot</button>
      <a id="artists"></a>
      <div className="artistSection">
        <h2 className="artists-carosel">Artists</h2>
        <Carousel className="crsl" autoPlay infiniteLoop centerMode>
          {artists.map((artist) => (
            <div key={artist._id} className="artistHome">
              <Link to={`/artist/${artist._id}`}>
                <img src={artist.imageUrl} className="image-carosel" />
                <h2 className="artist-name-carosel">{artist.name}</h2>
              </Link>

              <img
                className="heartsImage"
                src={favouriteArtists[artist._id] ? Liked : notLiked}
                alt="heart-icon"
                onClick={() => toggleFav(artist._id)}
              />
              {/* <button onClick={() => toggleFav(artist._id)}>
                <img src={artist.favourite ? liked : notLiked} alt="heart" />
              </button> */}
            </div>
          ))}
        </Carousel>
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
      </div>
      <a id="book"></a>
      <div className="bookingSection">
        <img src="" alt="" />
        <h1>Save Your Spot</h1>
        <form action=""></form>
        <button></button>
      </div>
      <form>
        <div>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="customer_name"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email">Your E-mail</label>
          <input
            type="email"
            id="email"
            name="customer_email"
            placeholder="john.doe@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Your Phone</label>
          <input
            type="tel"
            id="phone"
            name="customer_phone"
            placeholder="+44 (0)"
          />
        </div>
        <hr />
        <div>
          <label htmlFor="adult">Adults</label>
          <input
            type="number"
            id="adult"
            name="total_adults"
            placeholder="1"
            min="1"
            required
          />
        </div>
        <div>
          <label htmlFor="child">Children</label>
          <input
            type="number"
            id="child"
            name="total_children"
            placeholder="0"
            min="0"
            required
          />
        </div>
        <hr />
        <button type="submit">Continue to checkout</button>
      </form>
    </>
  );
}

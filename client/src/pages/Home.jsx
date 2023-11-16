import { Link } from "react-router-dom";
import Form from "../components/Form";
import Logo from "../assets/logo.png";
import Liked from "../assets/liked.png";
import notLiked from "../assets/notliked.png";
import { useState } from "react";
import axios from "axios";
import Profile from "../components/Profile";

export default function Home({ artists }) {
  const [favouriteArtists, setFavouriteArtists] = useState({});

  //toggleFav - do axios.post
  const toggleFav = async (artistId) => {
    //check if artistID is in favourites
    const isFavourited = favouriteArtists[artistId];

    setFavouriteArtists({ ...favouriteArtists, [artistId]: !isFavourited });

    //send updated favourites to server
    try {
      const response = await axios.post(
        `http://localhost:8080/artists/favourite/${artistId}`,
        {
          email: "something",
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //header in first
    <>
      <img src={Logo} alt="" className="logoName" />
      <button className="bookButton">Book Your Spot</button>
      <a id="artists"></a>
      <div className="artistSection">
        <h2>Artists</h2>

        {artists.map((artist) => (
          <div key={artist._id} className="artistHomeContainer">
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
          </div>
        ))}
      </div>

      <div className="scheduleSection">
        <h2>Full Schedule</h2>
        <table>
          <tbody>
            <tr>
              <td>TIMING</td>
              <td>MAIN STAGE</td>
              <td>SECOND STAGE</td>
              <td>THIRD STAGE</td>
            </tr>
            <tr>
              <td>16:00</td>
              <td>Portishead</td>
              <td>Mazzy Star</td>
              <td>Dido</td>
            </tr>
            <td>17:30</td>
            <td>Ed Sheeran</td>
            <td>Beyonce</td>
            <td>The Weekend</td>
            <tr>
              <td>19:00</td>
              <td>Sharon Van Etten</td>
              <td>Nickelback</td>
              <td>Bjork</td>
            </tr>
            <tr>
              <td>20:30</td>
              <td>London Grammar</td>
              <td>The Gorillaz</td>
              <td>The Killers</td>
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
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import Form from "../components/Form";
import Logo from "../assets/logo.png";
export default function Home({ artists, setArtists, favouriteArtist }) {
  return (
    //header in first
    <>
      <img src={Logo} alt="" />
      <button>Book Your Spot</button>

      <div className="artistSection">
        <h2>Artists</h2>
        <div>
          {artists.map((artist) => {
            return (
              <div key={artist._id} className="artistHome">
                <Link to={`/artist/${artist._id}`}>
                  <h2>{artist.name}</h2>
                  <img src={artist.imageUrl} />
                </Link>
                <p>{artist.description}</p>

                <button onClick={() => favouriteArtist(artist._status)}>
                  ❤️
                </button>
              </div>
            );
          })}
          <Form artist={artists} setArtists={setArtists} />
        </div>
      </div>

      <div className="scheduleSection">
        <table>
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
        </table>
      </div>

      <div classNameName="aboutSection">
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31119.385489286!2d-2.404818897800208!3d55.3684140520141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487d8ed9a3a41967%3A0xfb85d138cda28d66!2sThe%20Cheviot%20Hills!5e0!3m2!1sen!2suk!4v1699963731287!5m2!1sen!2suk"
          width="400"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div classNameName="bookingSection">
        <img src="" alt="" />
        <h1>Save Your Spot</h1>
        <form action=""></form>
        <button></button>
      </div>
    </>
  );
}

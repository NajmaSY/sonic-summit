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
                  <img src={artist.imgUrl} />
                </Link>
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
          <tbody>
            <tr>
              <th>Artist</th>
              <th>Stage</th>
              <th>Time</th>
            </tr>
            <tr>
              <td>name</td>
              <td>name</td>
              <td>name</td>
            </tr>
            <tr>
              <td>12:00</td>
              <td>12:00</td>
              <td>12:00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="aboutSection">
        <h2>About</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
          explicabo distinctio maxime provident quasi eveniet impedit culpa in
          tempora. Fugiat voluptatibus ab iusto quasi maiores assumenda quia
          delectus libero reiciendis. Incidunt officia architecto consequatur in
          beatae nesciunt asperiores, eius ullam animi ratione, ipsum quod id
          deleniti eos doloribus repellat nihil?
        </p>
        <h3>Get in touch</h3>
        <p>Email: Phone:</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15134.051595754006!2d-1.7959898604722182!3d55.67698670333329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48874d12b7ff212d%3A0x6b907625500c6583!2sHoly%20Island!5e0!3m2!1sen!2suk!4v1699874310551!5m2!1sen!2suk"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="bookingSection">
        <img src="" alt="" />
        <h1>Save Your Spot</h1>
        <form action=""></form>
        <button></button>
      </div>
    </>
  );
}

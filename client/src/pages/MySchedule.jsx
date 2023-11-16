import axios from "axios";
import { useState, useEffect } from "react";
import "./MySchedule";
import "./MySchedule.css";

export default function MySchedule({ deleteArtist, editRating }) {
  const [mySchedule, setMySchedule] = useState([]);
  const [userEmail, setUserEmail] = useState("something"); //something for now, but will replace with actual user email

  //fetch schedule data from server
  useEffect(() => {
    const fetchMySchedule = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/MySchedule?userEmail=${userEmail}`
        );
        setMySchedule(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMySchedule();
  }, [userEmail]);

  const handleDeleteArtistClick = async (artistId) => {
    await deleteArtist(artistId);
    fetchMySchedule();
  };

  const handleEditRatingClick = async (artistId) => {
    await editRating(artistId);
    fetchMySchedule();
  };

  return (
    <div className="artist-home">
      <h1 className="h1schedule">My Schedule</h1>
      <div className="scheduleflex">
        <div className="containerOne">
          {mySchedule.map((artist, index) => (
            <div key={index} className="scheduleItem">
              <ul>
                <li>Time: {artist.stageTime}</li>
                <br />
                <li>Artist: {artist.name}</li>
                <br />
                <li>Stage: {artist.stage}</li>
                <br />
                <li>Rating: {artist.rating}</li>
                <br />
              </ul>
              <div className="myschedulebuttons">
                <button onClick={() => handleDeleteArtistClick(artist._id)}>
                  DELETE ARTIST
                </button>
                <button onClick={() => handleEditRatingClick(artist._id)}>
                  EDIT RATING
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

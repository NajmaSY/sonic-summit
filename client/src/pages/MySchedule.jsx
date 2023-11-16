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
}

// async function deleteArtist(event) {
//   event.preventDefault();
//   const API = "http://localhost:8080/myschedule";
//   const res = await axios.post(API, formData);
//   setArtists([...myschedule, res.data]);
// }

// async function editRating(event) {
//   event.preventDefault();
//   const API = "http://localhost:8080/myschedule";
//   const res = await axios.post(API, formData);
//   setRating([...rating, res.data]);
// }

const handleDeleteArtistClick = async (artistId) => {
  await deleteArtist(artistId);
  fetchMySchedule();
};

const handleEditRatingClick = async (artistId, newRating) => {
  await editRating(artistId, newRating);
  fetchMySchedule();
};

// const halfwayPoint = Math.floor(dummyData.length / 2);
// const columnA = [...dummyData].splice(0, halfwayPoint);
// console.log(columnA);
// const columnB = [...dummyData].splice(halfwayPoint);
// console.log(columnB);

return (
  <div>
    <h1 className="h1schedule">My Schedule</h1>
    <div className="scheduleflex">
      <div className="containerOne">
        {mySchedule.map((artist, index) => (
          <div key={index} className="scheduleItem">
            <ul>
              <li>Time: {artist.stageTime}</li>
              <li>Artist: {artist.name}</li>
              <li>Stage: {artist.stage}</li>
              <li>Rating: {artist.rating}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="containerTwo">
        {mySchedule.map((artist, index) => (
          <div key={index} className="scheduleItem">
            <ul>
              <li>Time: {artist.stageTime}</li>
              <li>Artist: {artist.name}</li>
              <li>Stage: {artist.stage}</li>
              <li>Rating: {artist.rating}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="myschedulebuttons">
        {/* <button onClick={handleMyScheduleClick}>MY SCHEDULE</button> */}
        <button onClick={() => handleDeleteArtistClick(artist._id)}>
          DELETE ARTIST
        </button>
        <button onClick={() => handleEditRatingClick(artist._id, newRating)}>
          EDIT RATING
        </button>
      </div>
    </div>
  </div>
);

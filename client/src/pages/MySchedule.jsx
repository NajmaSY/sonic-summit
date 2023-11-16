import axios from "axios";
import { useState, useEffect } from "react";
import "./MySchedule";
import "./MySchedule.css";
// what format is the schedule data coming from the server

//DONT DELETE
//NEW CODE - CHECK WITH TA
//fetching data from server
// export default function MySchedule(){
//   const [mySchedule, setMySchedule]= useState([])
//   const [userEmail, setUserEmail]=useState("something")//something for now, but will replace with actual user email

// useEffect(()=>{
// const fetchMySchedule = async ()=>{
//   try{
//     const response = await axios.get(`http://localhost:8080/MySchedule?userEmail=${userEmail}`)
//     setMySchedule(response.data)
//   }catch (error){
//     console.log(error)
//   }
// }
// fetchMySchedule();
// }, [userEmail])
// }
///

async function deleteArtist(event) {
  event.preventDefault();
  const API = "http://localhost:8080/myschedule";
  const res = await axios.post(API, formData);
  setArtists([...myschedule, res.data]);
}

async function editRating(event) {
  event.preventDefault();
  const API = "http://localhost:8080/myschedule";
  const res = await axios.post(API, formData);
  setRating([...rating, res.data]);
}
const dummyData = [
  {
    name: "Portishead",
    description:
      "Portishead are an English band formed in 1991 in Bristol. They are often considered one of the pioneers of trip hop music. The band are named after the nearby town of the same name, eight miles west of Bristol, along the coast. Portishead consists of Geoff Barrow, Beth Gibbons and Adrian Utley, while sometimes citing a fourth member, Dave McDonald, an engineer on their first records. Live shows also featured DJ Andy Smith. Their debut album, Dummy, was met with critical acclaim in 1994. Two other studio albums were issued: Portishead in 1997 and Third in 2008.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7ye8aRtbPEp1ThBy9dHXVy7K18qM2GD8zQ&usqp=CAU",
    stage: "One",
    stageTime: 1600,
    favourite: true,
    youtube: "https://www.youtube.com/watch?v=un8EW82GwKc",
    instagram: "https://www.instagram.com/portisheadofficial/?hl=en",
    facebook: "https://www.facebook.com/portishead/?locale=en_GB",
    rating: 4,
  },
  {
    name: "Mazzy Star",
    description:
      "U.S. band, based in Santa Monica, California, and part of the Paisley Underground movement. They are known for their crossover styles of folk, country and psychedelic rock. Formed in 1990 by David Roback (guitar and formerly of Rainy Day and Rain Parade) and Hope Sandoval (vocals).They began together as Opal in 1989 recording a promotional song named Ghost Highway. They changed their name in 1990 to Mazzy Star and re-recorded the song Ghost Highway for their debut album. The band never officially split up during these years but did take a long hiatus between 1997 and 2013. They played their last concert on March 2, 2019 in Mexico City. Mazzy Star effectively ended after the passing of David Roback in February 2020.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsF9YzxwyZJCzwcara-21FMJhV5XlBkhlVLg&usqp=CAU",
    stage: "Two",
    stageTime: 1600,
    favourite: true,
    youtube: "https://www.youtube.com/watch?v=ImKY6TZEyrI",
    instagram: "https://www.instagram.com/mazzystar/?hl=en",
    facebook: "https://www.facebook.com/MazzyStarOfficial/?locale=en_GB",
    rating: 5,
  },
  {
    name: "Dido",
    description:
      "Born: December 25, 1971 // London, England, United Kingdom. Her debut album 'No Angel', has sold more than 15 million copies worldwide. Eminem sampled (from the same album) the chorus verse from 'Thankyou,' for his hit single 'Stan,' giving Dido even more recognition. Her follow-up album 'Life For Rent,' also did well and sold over 12 million copies, meaning both of her first two albums are on the list of UK best selling albums of all time. Leaving Dido the only artist to have two albums featured on it. At the peak of her popularity, she was also the best paid artist in UK. She has been married to author Rohan Gavin since 2010.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyLlIzXmZOoRe2fMiRzPVR12JmrtAyRS13w&usqp=CAU",
    stage: "Three",
    stageTime: 1600,
    favourite: true,
    youtube: "https://www.youtube.com/watch?v=j-fWDrZSiZs",
    instagram: "https://www.instagram.com/dido/?hl=en-gb",
    facebook: "https://www.facebook.com/dido/?locale=en_GB",
    rating: 4,
  },
  {
    name: "Ed Sheeran",
    description:
      "Ed Sheeran is a Grammy-winning singer-songwriter known for hits like 'Shape of You' and 'Thinking Out Loud'. Sheeran has sold more than 150 million records worldwide, making him one of the world's best-selling music artists. He has 101 million RIAA-certified units in the US, and two of his albums are in the list of the best-selling albums in UK chart history.",
    imageUrl:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc1%2FEd_Sheeran-6886_%28cropped%29.jpg&tbnid=BOeGH5_TnkaCbM&vet=12ahUKEwjCtYH94sCCAxUCeqQEHfC9B58QMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEd_Sheeran&docid=3YE10CZnfxKwJM&w=2698&h=3410&q=ed%20sheeran%20description&ved=2ahUKEwjCtYH94sCCAxUCeqQEHfC9B58QMygAegQIARB0",
    stage: "One",
    stageTime: 1730,
    favourite: true,
    youtube: "https://www.youtube.com/watch?v=T0brO3x4h30",
    instagram: "https://www.instagram.com/teddysphotos/?hl=en",
    facebook: "https://www.facebook.com/EdSheeranMusic/?locale=en_GB",
    rating: 5,
  },
];

export default function MySchedule() {
  function handleDeleteArtistClick() {}

  const halfwayPoint = Math.floor(dummyData.length / 2);
  const columnA = [...dummyData].splice(0, halfwayPoint);
  const columnB = [...dummyData].splice(halfwayPoint);
  return (
    <div>
      <h1 className="h1schedule">My Schedule</h1>
      <div className="scheduleflex">
        <div className="containerOne">
          {/* OR {mySchedule.map((artist, index)=>)} */}
          {columnA.map((artist, index) => (
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
          {columnB.map((artist, index) => (
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
      </div>
      <div className="myschedulebuttons">
        <button onClick={handleMyScheduleClick}>MY SCHEDULE</button>
        <button onClick={handleDeleteArtistClick}>DELETE ARTIST</button>
        <button onClick={handleEditRatingClick}>EDIT RATING</button>
      </div>
    </div>
  );
}

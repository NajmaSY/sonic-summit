export default function MySchedule() {
  return (
    <div>
      <h1 className="h1schedule">My Schedule</h1>
      <div className="scheduleflex">
        <div className="containerOne">
          <ul className="box1">
            <li>TIME:</li>
            <li>ARTIST:</li>
            <li>STAGE:</li>
            <li>RATING:</li>
          </ul>

          <ul className="box2">
            <li>TIME:</li>
            <li>ARTIST:</li>
            <li>STAGE:</li>
            <li>RATING:</li>
          </ul>

          <ul className="box3">
            <li>TIME:</li>
            <li>ARTIST:</li>
            <li>STAGE:</li>
            <li>RATING:</li>
          </ul>
        </div>

        <div className="containerTwo">
          <ul className="box4">
            <li>TIME:</li>
            <li>ARTIST:</li>
            <li>STAGE:</li>
            <li>RATING:</li>
          </ul>

          <ul className="box5">
            <li>TIME:</li>
            <li>ARTIST:</li>
            <li>STAGE:</li>
            <li>RATING:</li>
          </ul>

          <ul className="box6">
            <li>TIME:</li>
            <li>ARTIST:</li>
            <li>STAGE:</li>
            <li>RATING:</li>
          </ul>
        </div>
      </div>
      <div className="myschedulebuttons">
        <button>MY SCHEDULE</button>
        <button>DELETE ARTIST</button>
        <button>EDIT RATING</button>
      </div>
    </div>
  );
}

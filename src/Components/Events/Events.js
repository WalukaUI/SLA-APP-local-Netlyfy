import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="eventOuter">
      <div className="container">
        <div className="card-group vgr-cards">
          <div className="card">
            <div className="card-img-body">
            </div>
            <div className="card-body">
            </div>
          </div>


          <div className="card">
            <div className="card-img-body">
              <img
                className="card-img"
                src="./img/SummerBBQPicnic2024.png"
                alt="Cardimagecap"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">Upcoming events </h4>
              <p className="card-text">
                <b> SLA Summer picnic 2024 </b>
              </p>
             <p>📌 Save the Date!
                Join us for the Sri Lanka Association summer picnic 2024. It’s going to be a day packed with laughter, food, and exciting activities for all ages!<br></br><br></br>
                📅 Date: Sunday, July 28, 2024<br></br>
                🕤 Time: Starting at 9:30 AM<br></br>
                📍 Location: Stacy Park, 9750 Old Bonhomme Rd, Olivette, MO 63132<br></br><br></br>
                🍗BBQ
                🎵 Music<br></br>
                🏐 Games for all ages<br></br>
                🎭 Volunteer performances – showcase your talents!<br></br><br></br>
                Let’s make memories and celebrate our community spirit. See you all there!</p>
            </div>
          </div>

          <div className="card">
            {/* <div className="card-img-body">
              <img
                className="card-img"
                src="./img/fundraiserhealth.jpg"
                alt="Cardimagecap"
              />
            </div> */}
            <div className="card-body">
              <h4 className="card-title">Ongoing events </h4>
              <p className="card-text">
              <a href="/contact">Contact us for More Information</a>
              </p>

            </div>
          </div>

          <div className="card">
            <div className="card-img-body">
              <img
                className="card-img"
                src="./img/newyear2024.jpg"
                alt="Cardimagecap"
              />
            </div>

            <div className="card-body">
              <h4 className="card-title">Recent events </h4>
              <p className="card-text">
                <b>New Year Celebration 2024 </b>
              </p>
              <p className="card-text">
                SLA Annual General Meeting and Sri Lankan New Year Celebration 2024.
                The festival was held on Saturday 20th of April 2024, from 10.30 am to 3pm with Traditional 
                SL New Year food, games, and performances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;

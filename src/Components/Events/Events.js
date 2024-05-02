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
            {/* <div className="card-img-body">
              <img
                className="card-img"
                src="./img/fundraiserhealth.jpg"
                alt="Cardimagecap"
              />
            </div> */}
            <div className="card-body">
              <h4 className="card-title">Upcoming events </h4>
              <p className="card-text">
                <b></b>
              </p>

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
                <b></b>
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
                <b> New Year Celebration 2024 </b>
              </p>
              <p className="card-text">
                SLA Annual General Meeting and Sri Lankan New Year Celebration 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;

import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="eventOuter">
      <div className="container">
        <div className="card-group vgr-cards">
          <div className="card">
            <div className="card-img-body">
              <img
                className="card-img"
                src="./img/1.jpg"
                alt="Cardimagecap"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">Upcoming events</h4>
              <h5>2021 Greentree Festival</h5>
              <p>September 17, 18, 19 – 2021</p>
              <p className="card-text">
                We will continue our tradition of hosting a booth. Volunteers
                are needed to help with the grill, food preparation, and sales.
                For more information, please contact Tharindu, Udara or SLA
                executive committee at{" "}
                <a href="/contact">midwestlsa@gmail.com</a>
              </p>
              <a href="/contact" className="btn btn-outline-warning">
                Donate
              </a>
              <p>
                <a href="https://www.kirkwoodmo.org/recreation/greentree-festival">
                  Visit Greentree festival website...
                </a>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img-body">
              <img
                className="card-img"
                src="./img/3.jpg"
                alt="Cardimagecap"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">Ongoing events </h4>
              <p className="card-text">
                <b> O2 for Sri Lanka initiative </b>
              </p>
              <a href="/contact" className="btn btn-outline-warning">
                Donate
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-img-body">
              <img
                className="card-img"
                src="https://picsum.photos/450/250"
                alt="Cardimagecap"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">Recent events </h4>
              <p className="card-text">
                <b> SLA Summer picnic </b>
              </p>
              <p className="card-text">
                This year’s summer picnic was a lot of fun with delicious food,
                games and much needed catching up. It was great meeting many new
                faces as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;

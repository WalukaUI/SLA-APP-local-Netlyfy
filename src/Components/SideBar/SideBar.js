import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./SideBar.css";

function SideBar() {
  return (
    <>
      <div className="cardDiv">


      <Card bg="light" className="cardChild">
          <Card.Body>
            <Card.Title>Upcoming Events</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            SLA Summer picnic 2024
            </Card.Subtitle>
            <Card.Text>
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
            </Card.Text>
            <Card.Link href="/events">More...</Card.Link>
            <hr />
            <br />
            <Card.Link href="/contact">
              Contact us for More Information
            </Card.Link>
          </Card.Body>
        </Card>


        {/* <Card bg="light" className="cardChild">
          <Card.Body>
            <Card.Title>Projects </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              2022-2023
            </Card.Subtitle>
            <Card.Text>
              #MedicalHelpSriLanka
            </Card.Text>
              <p>Supplied Immediate medical supplies for national Hospitals in Sri Lanka</p>
              <br/>
            <Card.Subtitle className="mb-2 text-muted">
              2020-2021
            </Card.Subtitle>
            <Card.Text>
              #O2
            </Card.Text>
              <p></p>
              <br/>
            <hr />
            <Card.Link href="/projects">
              Contact us for More Information
            </Card.Link>
          </Card.Body>
          </Card> */}

        <Card bg="light" className="cardChild">
          <Card.Body>
            <Card.Title>Recent Events</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            New Year Celebration 2024
            </Card.Subtitle>
            <Card.Text>
            SLA Annual General Meeting and Sri Lankan New Year Celebration 2024.
                The festival was held on Saturday 20th of April 2024, from 10.30 am to 3pm with Traditional 
                SL New Year food, games, and performances.
            </Card.Text>
            <Card.Link href="/events">More...</Card.Link>
            <hr />
            <br />
            <Card.Link href="/contact">
              Contact us for More Information
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default SideBar;

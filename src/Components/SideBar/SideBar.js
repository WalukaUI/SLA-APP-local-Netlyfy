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
          </Card>
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
            <Card.Link href="#">More...</Card.Link>
            <hr />
            <br />
            <Card.Link href="/events">
              Contact us for More Information
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default SideBar;

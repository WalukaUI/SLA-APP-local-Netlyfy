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
            <Card.Title>Upcoming events </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {/* #MedicalHelpSriLanka */}
            </Card.Subtitle>
            <Card.Text></Card.Text>
            <hr />
            <Card.Link href="/contact">
              Contact us for More Information
            </Card.Link>
          </Card.Body>
          <Card.Body>
            <Card.Title>Ongoing events </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {/* #MedicalHelpSriLanka */}
            </Card.Subtitle>
            <Card.Text></Card.Text>

            {/* <a
              href="https://www.gofundme.com/"
              target="blank"
              rel="blank"
              className="btn btn-outline-success"
            >
              Go to our GoFundMe Page
            </a> */}
            <hr />
            <Card.Link href="/contact">
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
            </Card.Text>
            <Card.Link href="#">More...</Card.Link>
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

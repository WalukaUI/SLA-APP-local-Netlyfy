import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

function Carosel() {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/flag5.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="description"></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="description">
            <h5 className="carasolevent">Coming Soon...</h5>
            <h3> Collecting goods for Afghan refugees</h3>
            <a href="!#">more information will be available soon...</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="../img/3.jpg" alt="Third slide" />

          <Carousel.Caption className="description">
            <h5 className="carasolevent">Ongoing event...</h5>
            <h3> O2 for Sri Lanka initiative</h3>
            <a
              href=" https://www.gofundme.com/f/Sri-Lanka-Covid-Help-ICU-Oxygen?fbclid=IwAR0h9OI1eMIscrYNOMU77obfjoaeUKSqYpGg0cU6MPYXYsTVKShIWLpWuEc"
              target="blank"
              rel="blank"
              className="btn btn-success"
            >
              Go to our GoFundMe Page
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carosel;

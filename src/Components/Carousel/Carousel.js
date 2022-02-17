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
            src="../img/3.jpg"
            alt="Second slide"
          />

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
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/lighthouse.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="description attributename">
            Photo by{" "}
            <a href="https://unsplash.com/@the_bracketeer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Hendrik Cornelissen
            </a>
            on{" "}
            <a href="https://unsplash.com/s/photos/sri-lanka-tourism?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carosel;

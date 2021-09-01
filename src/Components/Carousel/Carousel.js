import React from "react";
import { Nav, Carousel } from "react-bootstrap";
import "./Carousel.css";

function Carosel() {
  return <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src="../img/1.jpg" alt="First slide" />
          <Carousel.Caption>
              <h5 className="carasolevent">Upcoming event</h5>
            <h3> 2021 Greentree Festival</h3>
            <h5>September 17, 18, 19 – 2021</h5>
            <p>We will continue our tradition of hosting a booth. Volunteers are needed...<a href="/contact">More...</a></p>
              <a href=" https://www.kirkwoodmo.org/recreation/greentree-festival">Visit Greentree festival website</a>
              <Nav.Link href="/contact">
                <button className="btn btn-warning">Donate</button>
           </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h5 className="carasolevent">Coming Soon...</h5>
            <h3> Collecting goods for Afghan refugees</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="../img/3.jpg" alt="Third slide" />

          <Carousel.Caption>
          <h5 className="carasolevent">Ongoing event...</h5>
            <h3> O2 for Sri Lanka initiative</h3>
            <Nav.Link href="/contact">
                <button className="btn btn-warning">Donate</button>
           </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
}

export default Carosel;

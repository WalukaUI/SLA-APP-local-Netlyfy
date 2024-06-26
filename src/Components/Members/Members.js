import React from "react";
import { Nav } from "react-bootstrap";
import "./Members.css";
const Members = () => {
  return (
    <div className="members_outer">
      <section className="about-us py-1 aboutcontainer" id="about-us">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-success">Members</h1>
              <h2>SLA Midwest Executive Committee (2023-2025)</h2>
              <hr />
              <p>Ayusha Amarakone (President)</p>
              <p>Ann Dissanayake (Vice President)</p>
              <p>Shihani Sharmila (Secretary)</p>
              <p>hamara Jayasundara (Treasurer)</p>
              <hr />
              <Nav.Link href="/about">
                <button className="btn btn-warning">More About Us</button>
              </Nav.Link>
            </div>
            <div className="col-md-6">
              <img src="/img/logo.jpg" alt="logo" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Members;

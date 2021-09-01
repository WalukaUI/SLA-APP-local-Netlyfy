import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";


function Nav2({ newMemberForm, setNewMembwrForm }) {

  return (
    <>
      <div className="navDiv">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="black"
          variant="dark"
          className="navbar2"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src="../img/logo.jpg"
                alt="SLA Logo"
                className="logoImageNav2"
              />
              SRI LANKA ASSOCIATION
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>

                <NavDropdown
                  title="More"
                  id="collasible-nav-dropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/gallery">
                    Photo Gallery
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/members">
                    committee Members
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/history">
                    History
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav>
              <Nav.Link href="/create">
                <button className="btn btn-warning">Become a Member</button>
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Nav2;

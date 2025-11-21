import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBar() {
  const expand = "md";
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShow = () => setShow(true);

  return (
    <Navbar expand={expand} className="container-fluid shadow-lg  bg-blue-950">
      <Container fluid>
        <Navbar.Brand className="fw-bold text-white">I Portfolio</Navbar.Brand>

        <Navbar.Toggle
          className="bg-white"
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          onClick={handleShow}
        />

        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          className="bg-white"
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
          style={{ width: "60%" }}
        >
          <Offcanvas.Header closeButton className="bg-blue-950 btn-close-white">
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${expand}`}
              className="fw-bold text-light"
            >
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="bg-blue-950">
            <Nav
              className="ms-auto my-2 my-lg-0  justify-content-end pe-3"
              navbarScroll
            >
              <Nav.Link
                as={Link}
                to="/"
                className="fw-semibold text-white hover:shadow-xl  hover:text-primary"
                onClick={handleClose}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="fw-semibold text-white hover:shadow-xl hover:text-primary"
                onClick={handleClose}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/resume"
                className="fw-semibold text-white hover:shadow-xl hover:text-primary"
                onClick={handleClose}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/project"
                className="fw-semibold text-white hover:shadow-xl hover:text-primary"
                onClick={handleClose}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className="fw-semibold text-white hover:shadow-xl hover:text-primary"
                onClick={handleClose}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;

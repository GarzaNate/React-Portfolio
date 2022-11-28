import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function NavBar({ currentPage, setCurrentPage }) {
  const pages = ["About", "Portfolio", "Resume", "Contact"]

  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {pages.map((page) => (
              <Nav.Link className={currentPage === page ? "nav-item active" : "nav-item"} key={page}>
                <a href={"#" + page.toLowerCase()} onClick= {() => setCurrentPage(page)} className={currentPage === page ? "nav-item active" : "nav-item"}>
                  {page}
                </a>
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              {/* <a href="#"><img src={} alt="" /></a>
                <a href="#"><img src={} alt="" /></a>
                <a href="#"><img src={} alt="" /></a> */}
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
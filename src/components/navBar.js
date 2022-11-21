import { useState, useEffect} from "react";
import { Nav, Navbar, Container } from "'react-bootstrap'";
import { useState } from "react";

export const Navbar = () => {
    // keeping track of clicked link
    const {activeLink, setActiveLink} = useState('home');
    // keeping track of if the user has scrolled or not
    const {scrolled, setScrolled} = useState(false);


    // useEffect to change navbar background color after user scrolls
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            };
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    })
    return (
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={} alt="" /></a>
                <a href="#"><img src={} alt="" /></a>
                <a href="#"><img src={} alt="" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};
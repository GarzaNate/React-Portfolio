import React from "react";

function NavBar({ currentPage, setCurrentPage }) {
  // const pages = ["About", "Portfolio", "Resume", "Contact"]

  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-center nav-background">
      <div >
      <a className="navbar-brand me-auto link" href="#about" onClick= {() => setCurrentPage("about")}>Josue Garza</a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link link" href="#about" onClick= {() => setCurrentPage("about")}>About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link" href="#portfolio" onClick= {() => setCurrentPage("portfolio")}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link" href="#resume" onClick={() => setCurrentPage("resume")}>Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link" href="#contact" onClick={() => setCurrentPage("contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
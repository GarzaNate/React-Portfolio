import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
// import { BrowserRouter as Router, Routes } from 'react-router-dom';
// import Header from "./components/Header";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
//import Contact from "./components/Contact";
//import Resume from "./components/Resume";
// import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
// import Header from "./components/Header";

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return document.location.hash.slice(1);
  });

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case "About":
  //       return <About />;
  //     case "Portfolio":
  //       return <Portfolio />;
  //     case "Contact":
  //       return <Contact />;
  //     case "Resume":
  //       return <Resume />;
  //     default:
  //       return <About />;
  //   }
  // };

  return (
    <div>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Project from "./components/Project";



function App() {

  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}>
      </Header>
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App;

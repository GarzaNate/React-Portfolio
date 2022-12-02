import React from "react";
import NavBar from "./NavBar";

function Header({ pages, currentPage, setCurrentPage }) {


    return (
        <div className="fixed-top">
            <header className="bg-light">
                <h1>Full-Stack Web Developer</h1>
                <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </header>
        </div>
    )
}


export default Header;
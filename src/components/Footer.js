import React from "react";

//need a third social media link

function Footer() {

    return (
        <div className="fixed-bottom">
            <footer className=" footer text-center text-white" style={{ backgroundColor: "light" }}>
                <div className="text-center text-dark p-3" style={{ backgroundColor: "lightgray" }}>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.linkedin.com/in/josue-garza-b8b47623b/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-linkedin">LinkedIn</i>
                    </a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://github.com/GarzaNate"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-github">Github</i>
                    </a>
                </div>

            </footer>
        </div>
    );
};


export default Footer;
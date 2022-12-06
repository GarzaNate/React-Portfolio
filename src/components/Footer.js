import React from "react"
//need a third social media link

function Footer() {

    return (
        <div>
            <footer className=" footer text-center text-white" >
                <div className="text-center p-3">
                    <a
                        className="btn btn-link btn-floating btn-lg m-1"
                        href="https://www.linkedin.com/in/josue-garza-b8b47623b/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i class="bi bi-linkedin dark">linkedin</i>
                    </a>
                    <a
                        className="btn btn-link btn-floating btn-lg m-1"
                        href="https://github.com/GarzaNate"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-github link">Github</i>
                    </a>
                </div>

            </footer>
        </div>
    );
};


export default Footer;
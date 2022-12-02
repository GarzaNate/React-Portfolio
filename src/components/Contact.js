import React from "react";

function Contact() {
    return (
        <div>
            <div className="card" style={{width: "auto"}}>
                <div className="card-body">
                    <h5 className="card-title">Contact Me!</h5>
                    <p className="card-text">Here are a few ways to get in contact with me.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Email</li>
                    <li className="list-group-item">Phone</li>
                    <li className="list-group-item">LinkedIn</li>
                    <li className="list-group-item">...</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    )
}


export default Contact;

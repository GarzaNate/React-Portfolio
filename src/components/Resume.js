import React from "react";

function Resume() {
    return (
        <div>
            <p className="text-white">
                Download my <a href="https://www.linkedin.com/">resume</a>
            </p>
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Front-End Proficiencies</h5>
                        <p className="card-text">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">HTML</li>
                                <li className="list-group-item">CSS</li>
                                <li className="list-group-item">JavaScript</li>
                                <li className="list-group-item">JQuery</li>
                                <li className="list-group-item">Responsive Design</li>
                                <li className="list-group-item">React</li>
                                <li className="list-group-item">Bootstrap</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Back-End Proficiencies</h5>
                        <p className="card-text">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">APIs</li>
                                <li className="list-group-item">Node</li>
                                <li className="list-group-item">Express</li>
                                <li className="list-group-item">MySQL/ Sequelize</li>
                                <li className="list-group-item">MongoDB/ Mongoose</li>
                                <li className="list-group-item">REST</li>
                                <li className="list-group-item">GraphQL</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Resume;
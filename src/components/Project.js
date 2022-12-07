import React from "react";
import dreamJob from '../assets/images/dreamJob.png';
import eCommerce from '../assets/images/eCommerceRoute.png';
import employeeTracker from '../assets/images/employeeTracker.png';
import textEditor from '../assets/images/jateTextEditor.png';
import noteTaker from '../assets/images/noteTakerApp.png';
import teamGenerator from '../assets/images/teamGenerator.png';


// an array of projects
// use .map() to iterate over each project and create cards for each
// className folder State: activity 4

function Project() {

    const projects = [
        {
            name: 'Dream Job Finder',
            deployed_link: 'https://sheetaljwl795.github.io/dream-job-finder/',
            github_repo: 'https://github.com/sheetaljwl795/dream-job-finder',
            image: dreamJob,
        },
        {
            name: 'ECommerce Back-End',
            deployed_link: 'https://drive.google.com/file/d/1TGkN8rg70QSiJsBA62dwMDIu5HDTqDYw/viewLinks to an external site.',
            github_repo: 'https://github.com/GarzaNate/E-Commerce-Backend',
            image: eCommerce,
        },
        {
            name: 'Employee Tracker',
            deployed_link: 'https://drive.google.com/file/d/1If8XyUEfQNAAEQkPYaI1k4XcDJMGwumD/view',
            github_repo: 'https://github.com/GarzaNate/Employee-tracker',
            image: employeeTracker,
        },
        {
            name: 'Jate Text Editor',
            deployed_link: 'https://desolate-citadel-42669.herokuapp.com/Links to an external site.',
            github_repo: 'https://github.com/GarzaNate/Jate-Text-Editor',
            image: textEditor,
        },
        {
            name: 'Note Taker App',
            deployed_link: '',
            github_repo: 'https://github.com/GarzaNate/Note-taker',
            image: noteTaker,
        },
        {
            name: 'Team Generator',
            deployed_link: '',
            github_repo: 'https://github.com/GarzaNate/team-profile-generator',
            image: teamGenerator,
        },
    ]

    return (
        <div style={{
        display: "flex", flexWrap: "wrap"}}>
            {projects.map((projects) =>
                // <div className="row">
                    <div className="col-4">
                        <div className="card" style={{ "width": "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{projects.name}</h5>
                            </div>
                            <img className="card-img-top" src={projects.image} alt="Project Pictures"></img>
                            <div className="card-body">
                                <a href={projects.github_repo} className="card-link">Github Repo</a>
                                <a href={projects.deployed_link} className="card-link">Deployed Link</a>
                            </div>
                        </div>
                    {/* </div> */}
                </div>)}
        </div>
    )
}


export default Project;
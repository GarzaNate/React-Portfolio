import React from "react";
import dreamJob from '../assets/images/dreamJob.png';
import eCommerce from'../assets/images/eCommerceRoute.png';
import employeeTracker from'../assets/images/employeeTracker.png';
import textEditor from '../assets/images/jateTextEditor.png';
import noteTaker from '../assets/images/noteTakerApp.png';
import  teamGenerator from '../assets/images/teamGenerator.png';


// an array of projects
// use .map() to iterate over each project and create cards for each
// className folder State: activity 4

function Project() {

    const projects = [
        {
            name: 'Dream Job Finder',
            deployed_link: '',
            github_repo: '',
            image: dreamJob,
        },
        {
            name: 'ECommerce Back-End',
            deployed_link: '',
            github_repo: '',
            image: eCommerce,
        },
        {
            name: 'Employee Tracker',
            deployed_link: '',
            github_repo: '',
            image: employeeTracker,
        },
        {
            name: 'Jate Text Editor',
            deployed_link: '',
            github_repo: '',
            image: textEditor,
        },
        {
            name: 'Note Taker App',
            deployed_link: '',
            github_repo: '',
            image: noteTaker,
        },
        {
            name: 'Team Generator',
            deployed_link: '',
            github_repo: '',
            image: teamGenerator,
        },
    ]

    return (
        <div className="container">
            {projects.map((projects) => 
            <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{projects.name}</h5>
            </div>
            <img className="card-img-top" src={projects.image} alt="Project Pictures"></img>
            <div className="card-body">
              <a href="#" className="card-link">Github Repo</a>
              <a href="#" className="card-link">Deployed Link</a>
            </div>
          </div>)}
        </div>
    )
}


export default Project;
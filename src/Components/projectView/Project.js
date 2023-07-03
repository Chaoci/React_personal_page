import React from 'react';
import './Project.css';
import ProjectItem from './ProjectItem';
const Project =()=>{
    return(
        <div className="project-wrapper" id="project">
            <div className="project-title">
                <h2>Web-Projects</h2> 
            </div>
            <ProjectItem/>
        </div>
    )
};

export default Project;
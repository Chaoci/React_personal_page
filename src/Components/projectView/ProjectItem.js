import React from 'react';
import './ProjectItem.css';
const ProjectItem = ()=>{
    const projectNames =['project1.png','project2.png','project3.png','project4.png','project5.png','project6.png','project7.png'];
    const contentTitles = ['React Weather-app', 'Bicycle-web Demo','NTF-Web Demo','gleasses-web Demo','code-web Demo','RWD-web Demo','Flask-web Demo']
    return(
        <div className="projectItemCard">
                {projectNames.map((projectName, index)=>(
                    <div className={`card${index+1}`}>
                        <img src={require(`../../images/${projectName}`)} alt={`Project ${index+1}`} key={index}/>
                        <div className="projectItems-content">
                            <h3>{contentTitles[index]}</h3> 
                        </div>
                    </div>
                    ))}
        </div>
    )   
};

export default ProjectItem; 

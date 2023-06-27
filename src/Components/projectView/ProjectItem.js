import React ,{useState, useEffect}from 'react';
import './ProjectItem.css';
const ProjectItem = ()=>{
    const projectNames =['project1.png','project2.png','project3.png','project4.png','project5.png','project6.png','project7.png'];
    const contentTitles = ['React Weather-app', 'Bicycle-web Demo','NTF-Web Demo','gleasses-web Demo','code-web Demo','RWD-web Demo','Flask-web Demo']
    const links = ['https://chaoci.github.io/React_Weather_App/','https://chaoci.github.io/Bicycle_web_practice/','https://chaoci.github.io/NFT_web/','https://chaoci.github.io/Glass_web/','https://chaoci.github.io/coding-tutor-web/','https://chaoci.github.io/Mission2/','https://github.com/Chaoci/myDaily'];
    const [showCard7, setShowCard7] = useState(false);
    const [buttonText, setButtonText] = useState('More');

    const handleButtonClick = () => {
        setShowCard7(!showCard7);
        setButtonText(showCard7 ? 'More' : 'Collapse');
    };
    
    //useEffect to adjust the window size
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <>
            <div className="projectItemCard">
                    { windowWidth > 768 && projectNames.map((projectName, index)=>(
                        <div className={`card${index+1} ${index === 6 && !showCard7 ? 'hidden' : ''}`}>
                            <a href={links[index]} target='_blank' rel='noopener noreferrer'>
                                <img src={require(`../../images/${projectName}`)} alt={`Project ${index+1}`} key={index}/>
                                <div className="projectItems-content">
                                    <h3>{contentTitles[index]}</h3> 
                                </div>
                            </a>
                        </div>
                        ))}
                    { windowWidth < 768 && projectNames.map((projectName, index)=>(
                        <div className={`card${index+1} ${index >= 3 && !showCard7 ? 'hidden' : ''}`}>
                            <a href={links[index]} target='_blank' rel='noopener noreferrer'>
                                <img src={require(`../../images/${projectName}`)} alt={`Project ${index+1}`} key={index}/>
                                <div className="projectItems-content">
                                    <h3>{contentTitles[index]}</h3> 
                                </div>
                            </a>
                        </div>
                        ))}
            </div>
            <div className="project-button" onClick={handleButtonClick}>
                <div className="btn btn-2 hover-filled-opacity">
                    <a href="#3"><span>{buttonText}</span></a>
                </div>
            </div>
        </>
    )   
};

export default ProjectItem; 

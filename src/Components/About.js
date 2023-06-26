import React from 'react';
import orange from '../images/orange.png';
import './About.css';
import Presentage from './UI/presentage';
import '../Components/UI/wave.css';

const About = () => {
    return (
            <div className="About-wrapper">
                <div className="box1">
                    <img src={orange} alt="" />
                </div>
                <div className="About-title">
                    <div className="About-title1">
                        <h2>About Me</h2>
                        <p>I am a front-end Web Developer with a passion for building web applications. I have a background in web development and a passion for learning new technologies.</p>
                    </div>
                    <div className="wave"></div>
                    <div className="About-title2">
                        <h2>Skills</h2>
                        <ul>
                            <li>
                                <h3>HTML</h3>
                                <Presentage color="orange" present="95%" animate="95"/>
                            </li>
                            <li>
                                <h3>Javascript</h3>  
                                <Presentage color="#256D85"present="90%" animate="90"/>
                            </li>
                            <li>
                                <h3>CSS</h3>
                                <Presentage color="orange" present="95%" animate="95"/>
                            </li>
                                <h3>React</h3>
                                <Presentage color="#256D85" present="80%" animate="80"/>
                            <li>
                            </li>
                            <li>
                                <h3>Python</h3>
                                <Presentage color="orange" present="85%" animate="85"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="box2">
                    <img src={orange} alt="" />
                </div>
            </div>
        );
};

export default About;  
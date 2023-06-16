import React from 'react';
import './Banner.css';
import '../Components/UI/button2.css';
import '../Components/UI/button.css';
import mypic from '../images/mypic.png';


const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-title">
                <h1>Hello, I'm a <br/>Font-end Developer</h1>
                <h2>Charlie Chao</h2>
                <p>HTML5, CSS, Javascript <br/> React, Tailwinds, Bootstrap5 <br/>Python</p>
                <div className="btn btn-2 hover-filled-opacity">
                    <a href="#3"><span>Contact</span></a>
                </div>
            </div>
            <div className="banner-photo">
                <img src={mypic} alt="banner" />
            </div>
        </div>
    );  
};

export default Banner;  
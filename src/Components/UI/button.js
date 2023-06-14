import React from 'react';
import './button.css';

const Button = (props)=>{
    return(
        <div className="btn btn-1 hover-filled-opacity">
            <a href={props.link}><span>{props.value}</span></a>
        </div>
    );
};

export default Button; 


import React from 'react';
import  './Button.css'
const Button =(props)=>{
    return(
        <div>
            <div class="btn from-top"><a href={props.link} target="_blank" rel="noopener noreferrer">Take a look</a></div>
        </div>
    )
}

export default Button;

import React from 'react';
import  './Button.css'
const Button =(props)=>{
    return(
        <div>
            <div className="btn from-top">
                {props.content}
            </div>
        </div>
    )
}

export default Button;

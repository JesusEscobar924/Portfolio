import React from 'react';
import classes from './Showcase.module.css';


const showcase = () =>{
    
    return(
        <div className={classes.Showcase}>
           
            <h1 className={classes.Name}>JESÚS ESCOBAR</h1>
            <p>I'm a Colombian front end developer</p><p> who loves to program and play chess.</p>
            
        </div>
    )
}

export default showcase;
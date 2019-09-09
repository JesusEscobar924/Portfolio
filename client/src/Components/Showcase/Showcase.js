import React from 'react';
import classes from './Showcase.module.css';
import Navbar from '../Navbar/Navbar'

const showcase = () =>{
    return(
        <div className={classes.Showcase}>
            <Navbar/>
            <h1 className={classes.Name}>JESÚS ESCOBAR</h1>
            <p>Hi, Im a Colombian front end developer who loves i dont know coding?</p>
            
        </div>
    )
}

export default showcase;
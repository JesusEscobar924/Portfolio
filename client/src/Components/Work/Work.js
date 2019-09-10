import React from 'react';
import Works from './Works/Works'
import classes from './Work.module.css'
const work = () =>(
    <div className={classes.Work}>
        <div className={classes.Lead}>
            <h1>Projects</h1>
        </div>
        
        <Works/>
    </div>
)

export default work;
import React from 'react';
import classes from './Navbar.module.css'

const navbar = () => {
    return(
        <header className={classes.Header}>
            <nav className={classes.Navbar}>
               <ul>
                <li className={classes.Icons}>Work</li>
                <li className={classes.Icons}>Contact</li>
                <li className={classes.Icons}>Resume</li>
               </ul>
            </nav>
        </header>
    )
}

export default navbar;
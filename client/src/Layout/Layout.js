import React from 'react';
import Showcase from '../Components/Showcase/Showcase'
import Work from '../Components/Work/Work'
import Contact from '../Components/Contact/Contact'
import classes from './Layout.module.css'
class Layout extends React.Component{
    render(){
        return(
            <div className={classes.Layout}>
                <Showcase/>
                <Work/>
                <Contact/>
            </div>
        )
    }
    
}
export default Layout;
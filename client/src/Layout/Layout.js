import React from 'react';
import Showcase from '../Components/Showcase/Showcase'
import Work from '../Components/Work/Work'
import Contact from '../Components/Contact/Contact'
const layout = () => {
    return(
        <div>
            <Showcase/>
            <Work/>
            <Contact/>
        </div>
    )
}
export default layout;
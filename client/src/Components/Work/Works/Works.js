import React from 'react';
import Square from './Square/Square'
import classes from './Works.module.css';

import uniqid from 'uniqid';

const works = () =>{
    const items=[
        {
            img:"https://i.ibb.co/hfhB865/sdfsdf.png",
            Title:"Zippo's",
            Info:"A Ecommerce website builded using React with React Router and Redux, implements Stripe for online payment processing and Firebase for User Authentication.",
            Tools:["react","redux","node","firebase"],
            
            link: "https://zippo-project.herokuapp.com/"
        },
        {
            img:"https://i.ibb.co/82MSj8s/sdsd.png",
            Title:"Cyborg News",
            Info:"A React single page app, who uses data provided for New York Times API and AccuWeather API.",
            Tools:["react", "node"],
            
            link: "https://cyborg-news.herokuapp.com/"
        },
        
        {
            img:"https://i.ibb.co/C58Sc9m/asdasd.png",
            Title:"To-do List",
            Info:"Todo-list who implements Firebase User Authentication and Firebase Database.",
            Tools:["react", "firebase"],
            link: "https://todo-list94.herokuapp.com/"
        },
        
    ]
    let square =  items.map(item => {
        let unid = uniqid();  
        return(
            <Square  
                key={unid}
                img={item.img} 
                title={item.Title} 
                api={item.API}  
                info={item.Info} 
                tools={item.Tools}  
                link={item.link}
                
            />
        )
    })
    return(
        <div  className={classes.Works}>
            {square}
        </div>
    )
}

export default works;
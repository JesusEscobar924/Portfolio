import React from 'react';
import classes from './Square.module.css'
import Button from '../../../Button/Button'
import node from '../../../../Assets/node.png'
import react from '../../../../Assets/react.png'
import redux from '../../../../Assets/redux.png'
import firebase from '../../../../Assets/firebase.png'
import uniqid from 'uniqid';

const Square =(props)=> {
    
        const {tools} = props;
        const toolimg={
            redux,
            firebase,
            react,
            node
        }
        let toolList;
       


        if(tools){
            toolList= tools.map(item =>  {   
                let unid = uniqid();   
                return(

                   <li key={unid} ><img src={toolimg[item]} alt="Item"/></li> 
                   
                )
            })
        }

        
     
   
        return( 
            <div  className={classes.Square}>
                <div className={classes.InfoContainer}>
                    <h1 className={classes.Title}>{props.title}</h1>

                    <p className={classes.Info}>{props.info}</p>

            
                    <ul className={classes.Ulist}>
                        {toolList}
                    </ul>

                    <Button link={props.link} content={
                        <a 
                            href={props.link} 
                            target="_blank" 
                            rel="noopener noreferrer">
                            Take a look
                        </a>}>

                    </Button>

                </div>
                <div className={classes.ImageContainer}>
                    <img className={classes.Img} src={props.img} alt="Item"/>
                </div>
                
                
            </div>
        )
    
   
}
export default Square;
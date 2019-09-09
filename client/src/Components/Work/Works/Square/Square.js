import React from 'react';
import classes from './Square.module.css'
import Button from '../../../Button/Button'
import node from '../../../../Assets/node.png'
import react from '../../../../Assets/react.png'
import redux from '../../../../Assets/redux.png'
import firebase from '../../../../Assets/firebase.png'

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
            toolList= tools.map(item=> 
            {   
                
                return(
                   <li><img src={toolimg[item]}/></li> 
                )
                
            }
            )
        }

        
     
   
        return( 
            <div  className={classes.Square}>
                <div className={classes.InfoContainer}>
                    <h1 className={classes.Title}>{props.title}</h1>

                    <p className={classes.Info}>{props.info}</p>

            
                    <ul className={classes.Ulist}>
                        {toolList}
                    </ul>
                    <Button link={props.link}/>
                </div>
                <div className={classes.ImageContainer}>
                    <img className={classes.Img} src={props.img} alt="Item"/>
                </div>
                
                
            </div>
        )
    
   
}
export default Square;
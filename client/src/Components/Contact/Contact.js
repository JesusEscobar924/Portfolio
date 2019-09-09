import React from 'react';
import axios from 'axios'

import classes from './Contact.module.css'

class Contact extends React.Component{
    state={
        name:"",
        email:"",
        message:""
    }

    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

      handleSubmit = event => {
        event.preventDefault();
        this.setState({ name: '', email: '',message:'' });
        axios({
            url: 'http://localhost:5000/send',
            method: 'post',
            data: {
                name:this.state.name,
                email: this.state.email,
                message:this.state.message
            }
        })

      };

    render(){
        
        return(
            
            <div className={classes.Container}>
              
                <form className={classes.Form} onSubmit={this.handleSubmit}  >  
                

                    <div className={classes.InputContainer} >

                        <span className={!this.state.name.length ? classes.Span : classes.Active}>
                            Name
                        </span>

                        <input 
                        className={classes.Input} 
                        onChange={this.handleChange}
                        name="name"
                        type="text"
                        value={this.state.name}
                        required/>
                        
                    </div>

                    <div className={classes.InputContainer} >

                        <span className={!this.state.email.length ? classes.Span : classes.Active}>
                            Email
                        </span>

                        <input 
                            className={classes.Input} 
                            onChange={this.handleChange}
                            name="email" 
                            type="email"
                            value={this.state.email}
                            required/>

                    </div>

                    <div className={classes.InputContainer}>

                        <span className={classes.MessageSpan}>
                            Leave a message!
                        </span>

                        <textarea
                            className={classes.Message}
                            onChange={this.handleChange}
                            name="message"
                            value={this.state.message}
                            required
                            >
                        </textarea>
                            
                    </div>
                    <input type="submit" />
                </form>
            </div>

        )
    }
}

export default Contact;
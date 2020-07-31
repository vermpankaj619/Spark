import React, { Component } from 'react'
import styled from "styled-components";
import { CheckOut} from './style'


export default class Step1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { Email, handleChange } = this.props;
        return (
            <div>
      
       
        <div className="bar">
         
      <i class="fa fa-check-circle"  id="one" aria-hidden="true">---------------------------------------</i>
     
    
       
      <i class="fa fa-check-circle"  aria-hidden="true">-----------------------------------------</i>

       
      <i class="fa fa-check-circle"   aria-hidden="true"></i>
        </div>


            <h3>Enter your Register Email address:</h3>
          
                <input 
                    type="email"
                    name="Email"
                    value={Email}
                    placeholder="Email Or Phone Number"
                    onChange={handleChange('Email')}
                    required
                /><br/>
         
          
          
            <button className="Next" onClick={this.continue}>
                SignUp/Login
            </button>
      
     


           
            </div>
        )
    }
}

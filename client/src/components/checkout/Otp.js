import React, { Component } from 'react'
import styled from "styled-components";



export default class Otp extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { Onetime, handleChange } = this.props;
        return (
            <div>
          
            <h3>Enter One Time password:</h3>
          
                <input 
                    type="tel"
                    name="Onetime"
                    value={Onetime}
                    placeholder="Enter One Time password"
                    onChange={handleChange('Onetime')}
                /><br/>
         
             
          
            <button className="Next" onClick={this.continue}>
               Enter Otp
            </button>
     
     



            </div>
        )
    }
}

import React, { Component } from 'react'
import styled from "styled-components";



export default class Address  extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { address, handleChange } = this.props;
        return (
            <div>
            <div className="bar">
         
            <i class="fa fa-check-circle"   id="two"  aria-hidden="true">---------------------------------------</i>
           
          
             
            <i class="fa fa-check-circle"  aria-hidden="true">-----------------------------------------</i>
      
             
            <i class="fa fa-check-circle"   aria-hidden="true"></i>
              </div>
              <div className='multi' > 
            <h2>Add delivery address</h2>
          <p> Choose your delivery address from address book or add new </p><br/>
                <input 
                    type="tel"
                    name="address"
                    value={address}
                    placeholder="Add delivery address"
                    onChange={handleChange('address')}
                /><br/>
         
             
          
            <button className="Next" onClick={this.continue}>
               Enter Address
            </button>
     </div>
     



            </div>
        )
    }
}

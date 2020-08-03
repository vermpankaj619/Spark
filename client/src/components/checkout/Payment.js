import React, { Component } from 'react'
import styled from "styled-components";
import { CheckOut} from './style'


export default class Paymnet extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { mode, handleChange ,  placeorder } = this.props;
        return (
            <div>
      
       
        <div className="bar">
         
      <i class="fa fa-check-circle"  id="one" aria-hidden="true">--------------------------------</i>
     
    
       
      <i class="fa fa-check-circle"  id="one" aria-hidden="true">--------------------------------</i>

       
      <i class="fa fa-check-circle"   aria-hidden="true"></i>
        </div>

        <div className='multi' > 
            <h2>Enter your Register Email address:</h2>
          
                <input 
                    type="email"
                    name="Email"
                    value={mode}
                    placeholder="Payment"
                    onChange={handleChange('mode')}
                    required
                /><br/>
         
          
          
            <button className="Next" onClick={ placeorder}>
            Place Order
            </button>
      
     

</div>
           
            </div>
        )
    }
}

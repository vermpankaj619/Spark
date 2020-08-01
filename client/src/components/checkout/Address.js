import React, { Component } from 'react'
import styled from "styled-components";

import { setAddress } from '../../actions/CartActions';
import { connect } from "react-redux";

 class Address  extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    state ={
        add:''
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    
      onSubmit = e => {
        e.preventDefault();
    
        const userData = {
          add: this.state.add,
          
        };
    
        this.props.setAddress(userData);
      };
    render() {
        const { add, handleChange } = this.props;
        const { address } = this.props;
        return (
            <div>
            <div className="bar">
         
            <i class="fa fa-check-circle"   id="two"  aria-hidden="true">-------------------------------</i>
           
          
             
            <i class="fa fa-check-circle"  aria-hidden="true">-----------------------------------</i>
      
             
            <i class="fa fa-check-circle"   aria-hidden="true"></i>
              </div>
              <div className='multi' > 
            <h2>Add delivery address</h2>
          <p> Choose your delivery address from address book or add new </p><br/>
             <form onSubmit={this.onSubmit}>
                <input 
                onChange={this.onChange}
                    type="name"
                    name="add"
                    id="add"
                    value={this.state.add}
                    placeholder="Add delivery address"
                   
                /><br/>
                <button  >
                Enter Address
             </button>
             </form>
                <button className="Next" onClick={this.continue}>
               Next
            </button>
         
               
          
            

           



     </div>
     
       


            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    cart:state.cart,
  
  });

export default connect(
    mapStateToProps,
    { setAddress }
  )((Address));
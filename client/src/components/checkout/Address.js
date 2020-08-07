import React, { Component } from 'react'


import { setAddress } from '../../actions/CartActions';
import { connect } from "react-redux";

import Loading from '../style/comman/loading.gif'
import {  Loader} from '../style/profile'

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
       
        const { address } = this.props.cart;

        if(address === null){

          return  (
              <Loader>
              <img alt="jkkj" src={Loading} ></img>
              </Loader>
              )
  
  
  
      }
      else {
        return (
            <div>
            <div className="bar">
         
            <i className="fa fa-check-circle"   id="two"  aria-hidden="true">--------------------------------</i>
           
          
             
            <i className="fa fa-check-circle"  aria-hidden="true">--------------------------------</i>
      
             
            <i className="fa fa-check-circle"   aria-hidden="true"></i>
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

             {address.map((repo) => {
                
              return (
      
           
           
         <li key ={repo._id}  >
       
      
      <div className="count" onClick={this.props.added(repo.add)}>
      
      <i className="fa fa-home" aria-hidden="true"> <span> Home</span></i><br></br>
     <span>{repo.add}</span> 
     
      </div>
       
       
       
       
      
         </li>
        
         
            
                  
              )
          }
          )}











             </form>
                <button className="Next" onClick={this.continue}>
               Next
            </button>
         
               
          
            

           



     </div>
     
       


            </div>
        )
    }
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
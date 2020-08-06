import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {  logoutUser} from '../../actions/authActions'
import {  orders  , getAddress} from '../../actions/CartActions'
import { Section1} from '../style/profile'

import Loading from '../style/comman/loading.gif'
   
import {  Loader} from '../style/profile'
import Sidebar from './Sidebar';


 class Address extends Component {

  async componentWillMount  () {
   

    await   this.props.orders();
 
    await   this.props.getAddress();
 
         
   }
   

  logout = () => {
    this.props.logoutUser()
      }
    render() {
        const { user} = this.props.auth;
        const { orders  , address} = this.props.cart;

        if( address  ==  null  ) {
          return  (
            <Loader>
            <img src={Loading} ></img>
            </Loader>
            )
        }
        else {
      if( address.length == 0 ){
        return (
           
          <Section1>
          <Sidebar/>
          <div class="one">
          <div>
        <h1>{user.name.toUpperCase()}<br/></h1>  
          <h3>{user.email}  <span> {user.phone}</span> </h3>
         
          </div>
          
          <div>
          <button onClick={this.logout}>
         Logout
          </button>
          
          </div>
          </div>

         
          <div className='order' >
           
          <div className="order1" >
          
          
          </div>
          
          
          
          
          </div>
        
          </Section1>
        )
      }



  else {

        return (
           
             <Section1>
             <Sidebar/>
             <div class="one">
             <div>
           <h1>{user.name.toUpperCase()}<br/></h1>  
             <h3>{user.email}  <span> {user.phone}</span> </h3>
            
             </div>
             
             <div>
             <button onClick={this.logout}>
            Logout
             </button>
             
             </div>
             </div>

            
             <div className='order' >
              
             <div className="order1" >

             
             </div>
             
             
             
             
             </div>
           
             </Section1>


        


             
          
        )
  }
    }
  }
}

  const mapStateToProps = state => ({
    
    auth:state.auth,
    cart:state.cart
  });
  
  export default  connect(mapStateToProps, { logoutUser, getAddress ,orders})(withRouter(Address));
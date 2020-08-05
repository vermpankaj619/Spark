import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {  logoutUser} from '../../actions/authActions'
import {  orders } from '../../actions/CartActions'
import { Section1} from '../style/profile'

import Loading from '../style/comman/loading.gif'
   
import {  Loader} from '../style/profile'
import Sidebar from './Sidebar';

 class profile extends Component {

  async componentWillMount  () {
   

    await   this.props.orders();
 
   
 
         
   }
   

  logout = () => {
    this.props.logoutUser()
      }
    render() {
        const { user} = this.props.auth;
        const { orders } = this.props.cart;

        if( orders  ==  null  ) {
          return  (
            <Loader>
            <img src={Loading} ></img>
            </Loader>
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
             <div className="order2">
             
            <h1>Orders</h1>


            { orders.map((repo) => {
                
              return (
                  
  
             
  
                  <div class="ok">
                  <li  key ={repo._id}>
                  <div className="list" >
                  <div className="type">
                  <img src={repo.image} ></img>
                  <ul>
                 <li>{repo.HotelName}   </li>             
                  <li>{repo.HotelPlace}</li> 
              <li>  {repo.orderNumber} {repo.Time} </li>
                  </ul>
                  </div>
                  <div className="type2" >
                  {repo.time}
                  </div>
                 
                  </div>
                  <div className="list2" >

                  <div className="btn">
                  <button>REORDER</button>
                  <button>HELP</button>
                  </div>
                  <div  className="btn2">
                  Total:
                  </div>
                  </div>
                  
                  </li>
                  </div>
                  
                 
              )
          }
        
       )}

             </div>
             
             
             
             </div>
   

           
             </Section1>





             
          
        )
    }
  }
}

  const mapStateToProps = state => ({
    
    auth:state.auth,
    cart:state.cart
  });
  
  export default  connect(mapStateToProps, { logoutUser ,orders})(withRouter(profile));
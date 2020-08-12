import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav , Navv , Bar } from './Style/Navbar'
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";
import {  getcart } from '../../actions/CartActions';
import { NavLink } from 'react-router-dom';
class Navbar extends Component {
  async componentWillMount  () {
   

    await   this.props.getcart();
 
   
 
         
   }
  logout = () => {
    this.props.logoutUser()
  }
  render() {
    const { user , isAuthenticated} = this.props.auth;

    const { cart } = this.props.cart;

     if(user.role === "cos")

     {
      if(isAuthenticated === true && cart !== null ) 
      {
      
      return (
        
       <Nav>
      
           <div className='head'>
           <ul>
         <Link to="/" > <li>  <img alt="pl" src={"https://res.cloudinary.com/spark3313/image/upload/v1595223613/egci82gyuaddnzbaciiv.png"} /> </li></Link> 
          
           </ul>
           
           </div>
  
           <div  className='head2'>
           <ul>
           <Link to="/search" > <li> <i className="fa fa-search" aria-hidden="true"></i><span>Search</span></li></Link> 
           <li><i className="fa fa-gift" aria-hidden="true"></i><span>Offers</span></li>
           <li><i className="fa fa-question-circle" aria-hidden="true"><span>Help</span></i></li>
  
  
  
          <Link to="/profile"><li><i className="fa fa-user" aria-hidden="true"><span>   {user.name}</span></i></li></Link> 
          
         <Link to="/checkout" ><li><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>Cart</span></li></Link>  
       
           </ul>
          
          
  
           </div>
           <div className="cart" >
           
           {cart.length}
          </div>
       
       </Nav>

       
  
      );
      }
      else {
      return (
  
        <Nav>
      
        <div className='head'>
        <ul>
      <Link to="/" > <li>  <img alt="pl" src={"https://res.cloudinary.com/spark3313/image/upload/v1595223613/egci82gyuaddnzbaciiv.png"} /> </li></Link> 
       
        </ul>
        
        </div>
  
        <div  className='head2'>
        <ul>
        <Link to="/search" > <li> <i className="fa fa-search" aria-hidden="true"></i><span>Search</span></li></Link> 
        <li><i className="fa fa-gift" aria-hidden="true"></i><span>Offers</span></li>
        <li><i className="fa fa-question-circle" aria-hidden="true"><span>Help</span></i></li>
  
  
  
       <Link to="/profile"><li><i className="fa fa-user" aria-hidden="true"><span>Signin</span></i></li></Link> 
       
      <Link to="/create-profile" ><li><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>Cart</span></li></Link>  
    
        </ul>
       
        </div>
    
    
    </Nav>
      )
  
      }
    }
    else {
    
        if(isAuthenticated === true  ) 
        {
         
          return (
            
           <Navv>
    
          
               <Bar>
        
  
               <img alt="pl" src={"https://res.cloudinary.com/spark3313/image/upload/v1595223613/egci82gyuaddnzbaciiv.png"} /> 
            <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/fgggx"
          >
          <i className="fa fa-th-list" aria-hidden="true"></i>
          ORDERS
          </NavLink>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/ffxg"
          >
          <i className="fa fa-bar-chart" aria-hidden="true"></i>
          REPORT
          </NavLink>
          <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/outofstock"
        >
        <i className="fa fa-bars" aria-hidden="true"></i>
        MENU
        </NavLink>
        <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/f"
      >
      <i class="fa fa-user" aria-hidden="true"></i>
      PROFILE
      </NavLink>
       <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/dffd"
    >
    <i class="fa fa-question-circle" aria-hidden="true"></i>
    HELP
    </NavLink>
            
               
    </Bar>
      
               <div  className='head2'>
              
               <ul>
              
             <li><span className="help" >{user.name}</span></li>
           

        
          
        
         <div
        activeClassName="navbar__link--active"
        className="navbar__link"
        onClick={this.logout}
      >
      <i class="fa fa-sign-out" aria-hidden="true"></i>
      LOGOUT
      </div>
              
      </ul>
               </div>
             
           
           </Navv>
      
          );
          }
          else {
            return (
        
              <Nav>
            
              <div className='head'>
              <ul>
            <Link to="/" > <li>  <img alt="pl" src={"https://res.cloudinary.com/spark3313/image/upload/v1595223613/egci82gyuaddnzbaciiv.png"} /> </li></Link> 
             
              </ul>
              
              </div>
        
              <div  className='head2'>
              <ul>
              <Link to="/search" > <li> <i className="fa fa-search" aria-hidden="true"></i><span>Search</span></li></Link> 
              <li><i className="fa fa-gift" aria-hidden="true"></i><span>Offers</span></li>
              <li><i className="fa fa-question-circle" aria-hidden="true"><span>Help</span></i></li>
        
        
        
             <Link to="/profile"><li><i className="fa fa-user" aria-hidden="true"><span>Signin</span></i></li></Link> 
             
            <Link to="/create-profile" ><li><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>Cart</span></li></Link>  
          
              </ul>
             
              </div>
          
          
          </Nav>
            )
        
            }
      
    }
     }


  



}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  cart:state.cart

});

export default connect(mapStateToProps,{logoutUser , getcart})(Navbar);

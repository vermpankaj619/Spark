import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav   } from '../style/Navbar'
import logo from '../style/comman/freeLogo (1).jpeg'
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";
import GlobalFonts from '../style/Navbar';
class Navbar extends Component {
  render() {
    const { user , isAuthenticated} = this.props.auth;
    
    
    return (
      
     <Nav>
    
         <div class='head'>
         <ul>
         <li>  <img src={logo} /> </li>
        
         </ul>
         
         </div>

         <div  class='head2'>
         <ul>
         <li> <i class="fa fa-search" aria-hidden="true"></i><span>Search</span></li>
         <li><i class="fa fa-gift" aria-hidden="true"></i><span>Offers</span></li>
         <li><i class="fa fa-question-circle" aria-hidden="true"><span>Help</span></i></li>
         <li><i class="fa fa-user" aria-hidden="true"><span>{user.name}</span></i></li>
         <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><span>Cart</span></li>
         </ul>
        
         </div>
     
     
     </Nav>

    );
  }



}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,

});

export default connect(mapStateToProps,{logoutUser })(Navbar);

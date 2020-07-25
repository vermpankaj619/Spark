import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav   } from '../style/Navbar'
import logo from '../style/comman/freeLogo (1).jpeg'
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";
import GlobalFonts from '../style/Navbar';
class Navbar extends Component {
  logout = () => {
    this.props.logoutUser()
  }
  render() {
    const { user , isAuthenticated} = this.props.auth;
    
    
    return (
      
     <Nav>
    
         <div className='head'>
         <ul>
       <Link to="/" > <li>  <img src={"https://res.cloudinary.com/spark3313/image/upload/v1595223613/egci82gyuaddnzbaciiv.png"} /> </li></Link> 
        
         </ul>
         
         </div>

         <div  className='head2'>
         <ul>
         <Link to="/search" > <li> <i className="fa fa-search" aria-hidden="true"></i><span>Search</span></li></Link> 
         <li><i className="fa fa-gift" aria-hidden="true"></i><span>Offers</span></li>
         <li><i className="fa fa-question-circle" aria-hidden="true"><span>Help</span></i></li>



        <Link to="/profile"><li><i className="fa fa-user" aria-hidden="true"><span>   {user.name}</span></i></li></Link> 
        
       <Link to="/create-profile" ><li><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>Cart</span></li></Link>  
     
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

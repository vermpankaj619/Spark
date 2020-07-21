import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link , Redirect} from 'react-router-dom';
import { createProfile } from '../../actions/profileActions'
import {  logoutUser} from '../../actions/authActions'
import { Section1} from '../style/profile'
import Sidebar from './Sidebar'

   

 class profile extends Component {
  logout = () => {
    this.props.logoutUser()
      }
    render() {
        const { user} = this.props.auth;
        return (
           
             <Section1>
             <div class="one">
             <div>
           <h1>{user.name.toUpperCase()}<br/></h1>  
             <h3>{user.email}  <span> {user.phone}</span> </h3>
            
             </div>
             
             <div>
             <button onClick={this.logout}>
             Edit Profile
             </button>
             
             </div>
             </div>
             <Sidebar/>
             </Section1>





             
          
        )
    }
}
profile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors,
    auth:state.auth,
  });
  
  export default  connect(mapStateToProps, { logoutUser,createProfile})(withRouter(profile));
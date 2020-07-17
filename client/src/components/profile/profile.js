import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link , Redirect} from 'react-router-dom';
import { createProfile} from '../../actions/profileActions'
 class profile extends Component {
   
    render() {
        const { user} = this.props.auth;
        return (
            <div>
             
            </div>
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
  
  export default  connect(mapStateToProps, { createProfile})(withRouter(profile));
import React, { Component } from 'react'
import { logoutUser } from "../../actions/authActions";
import {   store  } from '../../actions/profileActions';
import { connect } from "react-redux";
class storee extends Component {
    state = {
        pkk: this.props.match.params.id,
       


    };
  
    componentDidMount() {
        const profileData = {
            pkk:this.state.pkk
        }
      
        this.props.store(profileData);
    }
    render() {
        return (
            <div>
               dffddf
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
  
  });
  
  export default connect(mapStateToProps,{store})( storee );

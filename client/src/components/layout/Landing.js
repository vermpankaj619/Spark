import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {   getsch , getlist,  search  ,createSchedule  } from '../../actions/profileActions';
class Landing extends Component {
  componentWillMount() {
      
    this.props.getlist();
}

 state=
 {
  search:''

 }

onChange = e => {
  this.setState({ [e.target.id]: e.target.value });
};

onSubmit = (e) => {
  e.preventDefault();

  const profileData = {
    search: this.state.search,
  
       

  };

  this.props.search(profileData, this.props.history);
}
  render() {
    const {user , isAuthenticated } = this.props.auth;
    const {  profiles, loading } = this.props.profile;
       if(isAuthenticated == false) {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
              }
              else {
            return (

              <div>
  
         <Link to="/Home">Home</Link>

         <form onSubmit={this.onSubmit}>
              
         <input
         onChange={this.onChange}
         value={this.state.search}
       
         id="search"
         type="search"
       
       />
       <button
       style={{
         width: "150px",
         borderRadius: "3px",
         letterSpacing: "1.5px",
         marginTop: "1rem"
       }}
       type="submit"
       className="btn btn-large waves-effect waves-light hoverable blue accent-3"
     >
       Enter
     </button>
              
              
         </form>

              </div>
           
             





            )
            
        
      
       
     
        
      }
      
      
      
      
      
    
    }
  }














          
   

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,

});

export default connect(mapStateToProps,{createSchedule, search, getlist, getsch})(Landing)
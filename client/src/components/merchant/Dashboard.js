import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getCurrentProfile , getlist  } from '../../actions/profileActions';
import { Link , Redirect} from 'react-router-dom';
import { Loader } from '../style/profile'
import Loading from '../style/comman/loading.gif';


class Dashboard extends Component {

  componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getlist();
}

  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
 
 
   

render() {
    

  const {user} = this.props.auth;
  const {  profile, loading } = this.props.profile;


   if(user.role === "cos") {
    return <Redirect to='/' />
 

   }
   else {



  

  if( profile===null || loading) {
    return  (
      <Loader>
      <img alt="sdjdsk" src={Loading} ></img>
      </Loader>
      )
  }else {
     if(profile.category) {
      return (
          <div>
            <p className="lead text-muted">
              Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <Link to='/AddSchedule' className=' btn btn-lg btn-info'>Profile</Link>
           <button onClick={this.onLogout} > Logout</button>
        </div>
      )
     }
     else {
        return (
             <div>
                 <p className='lead text-muted'>Welcome{user.name}</p>
                 <p> You have not yet a profile, please add some info</p>
                 <Link to='/create-profile' className=' btn btn-lg btn-info'>Create Profile</Link>
                 <button onClick={this.onLogout} > Logout</button>
             </div>
         )
     }
  }


}
}
}



Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,

});

export default connect(mapStateToProps,{getCurrentProfile,logoutUser, getlist})(Dashboard);
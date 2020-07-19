import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link , Redirect} from 'react-router-dom';
import { createProfile} from '../../actions/profileActions'
import { Loader } from '../style/profile'
import Loading from '../style/comman/loading.gif'


class CreateProfile extends Component {

 
state = {
      displaySocialInputs: false,
      name : '',
      Hotel: '',
      Place: '',
      address: '',
      Pincode: '',
      skills: '',
      city: '',
      bio: '',
      state : '',
      errors: {}
      
    };

 

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

  onSubmit = (e) => {
    e.preventDefault();

    const profileData = {
        name: this.state.name,
      Hotel: this.state.Hotel,
      Place: this.state.Place,
      address: this.state.address,
      Pincode: this.state.Pincode,
      city: this.state.city,
      state: this.state.state,
      
    };

    this.props.createProfile(profileData, this.props.history);
  }
 
  



  render() {
    const { user} = this.props.auth;


   if(user.role = "cos"){
     return (
      <form noValidate onSubmit={this.onSubmit}>
      <div className="input-field col s12">
        <input
          onChange={this.onChange}
          value={this.state.name}
        
          id="name"
          type="name"
        
        />
        <label htmlFor="name">Name</label>
        <span className="red-text">
        
        </span>
      </div>
      <div className="input-field col s12">
        <input
          onChange={this.onChange}
          value={this.state.Hotel}
      
          id="Hotel"
          type=" Hotel"
          
        />
        <label htmlFor=" Hotel"> Hotel</label>
        <span className="red-text">
          
        </span>
      </div>
      <div className="input-field col s12">
      <input
        onChange={this.onChange}
        value={this.state.Place}
     
        id="Place"
        type="Place"
        
      />
      <label htmlFor="Place">Place</label>
      <span className="red-text">
        
      </span>
    </div>
    <div className="input-field col s12">
    <input
      onChange={this.onChange}
      value={this.state.address}
  
      id="address"
      type="address"
      
    />
    <label htmlFor="address">address</label>
    <span className="red-text">
      
    </span>
  </div>
  <div className="input-field col s12">
  <input
    onChange={this.onChange}
    value={this.state.Pincode}
  
    id="Pincode"
    type="Pincode"
    
  />
  <label htmlFor="Pincode">Pincode</label>
  <span className="red-text">
    
  </span>
  </div>
  <div className="input-field col s12">
  <input
    onChange={this.onChange}
    value={this.state.city}
  
    id="city"
    type="city"
    
  />
  <label htmlFor="city">city</label>
  <span className="red-text">
    
  </span>
  <div className="input-field col s12">
  <input
    onChange={this.onChange}
    value={this.state.state}
   
    id="state"
    type="state"
    
  />
  <label htmlFor="state">state</label>
  <span className="red-text">
    
  </span>
  </div>
  </div>
      <div className="col s12" style={{ paddingLeft: "11.250px" }}>
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
      </div>
    </form>
        )

   }

else {
  return <Redirect to='/' />
  }
}
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
  auth:state.auth,
});

export default  connect(mapStateToProps, { createProfile})(withRouter(CreateProfile));
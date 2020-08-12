import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {  Redirect} from 'react-router-dom';
import { createProfile} from '../../actions/profileActions'
import { Loginn} from '../style/profile'


class CreateProfile extends Component {


 
state = {
      category:'',
      Hotel: '',
      Place: '',
      address: '',
      image:'',
      HotelName:'',
     
      
    };

 

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
      onUpload = async (e) => {
        const files = e.target.files;
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'arlnf3ja')
        
        const res = await fetch('https://api.cloudinary.com/v1_1/spark3313/image/upload', {
          method: 'POST',
          body:data
        })
        const file = await res.json()
        let link = file.secure_url
         console.log(link)
      await   this.setState({ image:link });
      }

  onSubmit = (e) => {
    e.preventDefault();

    const profileData = {
      category: this.state.category,
      Hotel: this.state.Hotel,
      Place: this.state.Place,
      address: this.state.address,
      image: this.state.image,
      HotelName: this.state.HotelName
      
    };

    this.props.createProfile(profileData, this.props.history);
  }
 
  handleChange = (e) => {
    this.setState({category: e.target.value});
  }

  onType = (e) => {
    this.setState({Hotel: e.target.value});
  }


  render() {
    const { user} = this.props.auth;


   if(user.role === "mer"){
     return (
      <Loginn>
      <form noValidate onSubmit={this.onSubmit}>
      <div className="input-field col s12">

      <select value={this.state.category} onChange={this.handleChange}>
      <option>-------Choose One------</option>
      <option value="grocery-stores">Groceries & Essentials</option>
      <option value="fruit-and-vegetable-stores">Fruits & Vegetables</option>
      <option value="meat-and-fish-stores">Meet & Fish</option>
      <option value="restaurants">Food Delivery</option>
      <option value="medical-stores">Medicines</option>
      <option value="gifts">Gifts & Lifestyle</option>
      <option value="pet-supply-store">Pet Supplies</option>
      <option value="natural-drink">Natural Drink</option>
      <option value="whey-protein">Whey Protien and Supplments</option>
    
      </select>
    

    </div>
    <div className="input-field col s12">
    <input
      onChange={this.onChange}
      value={this.state.HotelName}
     placeholder="HotelName"
      id="HotelName"
      type="HotelName"
      
    />
   
      </div>

      <div className="input-field col s12">
      <div className="input-field col s12">

      <select value={this.state.Hotel} onChange={this.onType}>
      <option>-------Hotel------</option>
      <option value="Shop">Shop</option>
      <option value="Resturant">Resturant</option>
    
    
      </select>
    

    </div>
        
      </div>
      <div className="input-field col s12">
      <input
        onChange={this.onChange}
        value={this.state.Place}
        placeholder="Place"
        id="Place"
        type="Place"
        
      />
      
    </div>
    <div className="input-field col s12">
    <input
      onChange={this.onChange}
      value={this.state.address}
     placeholder="Address"
      id="address"
      type="address"
      
    />
  
  </div>
  <input type="file" onChange={this.onUpload}/>
 
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
    </Loginn>
        )

   }

else if( user.role==="cos") {
  return <Redirect to='/' />
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
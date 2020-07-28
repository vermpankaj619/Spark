import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import 'materialize-css';
import { Loginn} from '../style/profile'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      role:'cos',
      errors: {},
      phone:""
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      role:this.state.role,
      phone:this.state.phone,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
     <Loginn>
           <img  src={'https://res.cloudinary.com/spark3313/image/upload/v1595223613/egci82gyuaddnzbaciiv.png'} ></img>
            <form noValidate onSubmit={this.onSubmit}>
           
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  placeholder="Enter Name"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                /><br/>
            
                <span className="red-text">{errors.name}</span>
              
               
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                /><br/>
               
                <span className="red-text">{errors.email}</span>
               
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  placeholder="Enter Password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                /><br/>
             
                <span className="red-text">{errors.password}</span>
            
              
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Confirm Password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                /><br/>
              
                <span className="red-text">{errors.password2}</span>
            
            
           
              <input
                onChange={this.onChange}
                value={this.state.phone}
                placeholder="Enter Phone"
                id="phone"
                type="number"
               
              />
              
              
          
           
            
             
                <button
                
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
               
                
                <p className="grey-text text-darken-1">
                  Already have an account? <Link to="/login"> <span> Log in</span></Link>
                </p>
             
            
            </form>

         
         
            </Loginn>
     
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

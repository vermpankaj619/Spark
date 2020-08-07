import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Loginn} from '../style/profile'
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    // if (this.props.auth.isAuthenticated  && this.props.auth.user.detials ) {
    //   this.props.history.push("/dashboard");
    // }
    // else {
    //   this.props.history.push("/det");
    if(this.props.auth.isAuthenticated  && this.props.auth.user.detials) {
      this.props.history.push("/dashboard");
    } 


    
    
  
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated  ) {
      this.props.history.push("/dashboard");
    }
   

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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <Loginn>
      <img  alt="sd" src={'https://res.cloudinary.com/spark3313/image/upload/v1595223613/egci82gyuaddnzbaciiv.png'} ></img>
            
              
          
            <form noValidate onSubmit={this.onSubmit}>
            
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
               
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
             
        
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
               
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              
        
                <button
                
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              
              <p>
                Don't have an account? <Link to="/register"> <span>Register</span></Link>
              </p>
            </form>
            </Loginn>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {   upload , getlist  } from '../../actions/profileActions';
import axios from 'axios';
import { uploadFile } from 'react-s3';
import ReactS3 from 'react-s3';
const config = {
  bucketName: 'spark3313',
  dirName: 'photos', /* optional */
  region: 'ap-south-1',
  accessKeyId: 'AKIAJ3VL4RYNEENSEI5Q',
  secretAccessKey: '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',
}


class Landing extends Component {
  componentWillMount() {
      
    this.props.getlist();
}

 state=
 {
  selectedFile: null
 }

onChange = async (e) => {

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

   this.setState({ selectedFile:link });

  
};


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

         <input type="file" onChange={this.onChange}/>
         <button onClick={this.onSubmit}>Upload!</button>

              </div>
           
             





            )
            
        
      
       
     
        
      }
      
      
      
      
      
    
    }
  }














          
   

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,

});

export default connect(mapStateToProps,{upload , getlist})(Landing)
import React, { Component } from 'react';
import { logoutUser } from "../../actions/authActions";
import {   getsch , getlist , getId  } from '../../actions/profileActions';
import { connect } from "react-redux";
 class User extends Component {

      
    state = {
        pkk: this.props.match.params.id
    };

   
    componentDidMount() {
        const profileData = {
            pkk:this.state.pkk
        }
      
        this.props.getId(profileData);
    }

    render() {
        const {  res } = this.props.profile;
        if( res===null ) {
           
            return (
                <div>
                dfhdfjfdjdfhjf
                </div>
            )
        } 
        else {
            return (
                <div>
              {res.name}
              {res.Scehedule.map((repo) => {
                return (
                    
                    <li key ={repo._id}>
                    
                  
                    {repo.Dish}
                  
               
                
                 
                   
            
            
           
        
            



              </li>
              
              
                )
              
              })}
              </div>
            )
        }

    }
 }

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
  
  });
  
  export default connect(mapStateToProps,{getlist, getId })(User);
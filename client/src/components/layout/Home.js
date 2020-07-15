import React, { Component } from 'react'
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {   getsch , getlist , getId  } from '../../actions/profileActions';
import { Link} from 'react-router-dom';
 class Home extends Component {

    state ={
        id:''
    }
    componentDidMount() {
        this.props.getlist();
      
    }
  shoot = async (id) => {
   
   await this.setState({id:id })
     
   const profileData = {
    id:this.state.id
};

  
   
 await  this.props.getId(profileData, this.props.history);

 await this.props.history.push(`/resturant'`)

  }
  
    
    render() {
     
        const {  profiles, loading } = this.props.profile;
   
        if( profiles===null ) {
           
            return (
                <div>
                dfhdfjfdjdfhjf
                </div>
            )
        } 
        else {




        return (
            <div>
              
            {profiles.map((repo) => {
                  return (
                      
                      <li key ={repo._id}>
                      
                    
                      
                      
                 
                      <button  onClick={ () => this.shoot(repo._id)} >
         
                    
                {repo.name}
                </button>
             
            
              



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
  
  export default connect(mapStateToProps,{getlist, getId })(Home)
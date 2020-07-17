import React, { Component } from 'react'
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {   getsch , upload ,search , getlist , getId  } from '../../actions/profileActions';
import { Link} from 'react-router-dom';
 class Home extends Component {

    state=
    {
     element2:''
   
    }

    componentDidMount() {
        this.props.getlist();
      
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
      
      onSubmit = (e) => {
        e.preventDefault();
      
        const profileData = {
          search: this.state.element2,
        
             
      
        };
      
        this.props.upload(profileData, this.props.history);
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



            <form onSubmit={this.onSubmit}>
              
            <input
            onChange={this.onChange}
            value={this.state.element2}
          
            id="element2"
            type="file"
          
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







              
            {profiles.map((repo) => {
                  return (
                      
                      <li key ={repo._id}>
                      
                    
                      
                      
                 
                      <Link to={`/resturant/${repo.name}`}>
                   
                     
                    
                {repo.name}
              
             
                </Link>
              



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
  
  export default connect(mapStateToProps,{getlist,upload, search, getId })(Home)
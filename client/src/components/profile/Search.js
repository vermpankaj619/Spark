import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Searchh } from '../style/profile'
import { Loader , Section , Section2 } from '../style/profile'
import Loading from '../style/comman/loading.gif'
import Search2 from './Search2'
import {   getsch , getlist,  search  ,createSchedule  } from '../../actions/profileActions';
class Search extends Component {
   
   componentDidMount() {
     
     this.props.search()

   }


     state=
     {
      search:''
    
     }
    
   
    
    
    
    onChange = async e => {
     await this.setState({ [e.target.id]: e.target.value });
      e.preventDefault();
    
      const profileData = {
        search: this.state.search,
      
           
    
      };
    
   await   this.props.search(profileData, this.props.history);
    };
    goBack = () => {

      this.props.history.goBack();
    }
    
  
    render() {
        const {user , isAuthenticated } = this.props.auth;
        const {  profiles, loading , search} = this.props.profile;
           if( user == null ) {
        return (
          <Loader>
          <img src={Loading} ></img>
          </Loader>

        );
                  }
                  else {
                 
                return (
                <div>
    
                  <Searchh>
      
        
    
            
                  <i class="fa fa-search" aria-hidden="true"></i> 
             <input
             onChange={this.onChange}
             value={this.state.search}
             placeholder="Search for Shops Or Resturants"
             id="search"
             type="search"
           
           />
          
           <i onClick={this.goBack} id='cut' class="fa fa-times" aria-hidden="true"></i>
          
          
                  </Searchh>
               
                 
                  <Search2  search={search}/>
                  
                 

                  </div>
    
    
    
    
                )
                
            
          
           
         
            
          }
          
          
          
          
          
        
        }
      }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
              
       
    
    const mapStateToProps = state => ({
      auth: state.auth,
      profile: state.profile,
    
    });
    
    export default connect(mapStateToProps,{createSchedule, search, getlist, getsch})(Search)
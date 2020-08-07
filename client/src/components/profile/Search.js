import React, { Component } from 'react'

import { connect } from "react-redux";

import { Searchh } from '../style/profile'
import { Loader } from '../style/profile'
import Loading from '../style/comman/loading.gif'
import Search2 from './Search2'
import {   getsch , getlist,  search  ,createSchedule  } from '../../actions/profileActions';
class Search extends Component {
   
   componentDidMount() {
     
     this.props.search()

   }

   send = ( cat, name ) => {
    this.props.history.push(`/${this.props.profile.Locotion}/${name}/${cat}`)
 
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
        const {user , } = this.props.auth;
        const {  search} = this.props.profile;
           if( user == null ) {
        return (
          <Loader>
          <img alt="sd" src={Loading} ></img>
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
               
                 
                  <Search2  search={search} send={this.send}/>
                  
                 

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
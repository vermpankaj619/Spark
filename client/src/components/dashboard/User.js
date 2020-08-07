import React, { Component } from 'react';

import {   booking , getlist , getId  } from '../../actions/profileActions';
import { connect } from "react-redux";
 class User extends Component {

      
    state = {
        pkk: this.props.match.params.id,
        CosName:'',
        CosEmail:'',
        id:'',
        name:'',
        email:'',
         phone:'',
         Dish:'',
         Price:'',
         Type:'',
         scid:'',
         requestId:''


    };
  
  
    
    componentDidMount() {
        const profileData = {
            pkk:this.state.pkk
        }
      
        this.props.getId(profileData);
    }
    Add = async (scid,Dish, Type, Price, name, email , requestId  , CosName, CosEmail, id) => {
     await this.setState({scid:scid,Dish:Dish, Type:Type, Price:Price, requestId:requestId, name:name, email:email, CosName:CosName, CosEmail:CosEmail,id:id })
    
     const profileData = {
        CosName:this.state.CosName,
        CosEmail:this.state.CosEmail,
        id:this.state.id,
        name:this.state.name,
        email:this.state.email,
         phone:this.state.phone,
         Dish:this.state.Dish,
         Price:this.state.Price,
         Type:this.state.Type,
         scid:this.state.scid,
         requestId:this.state.requestId


     }
    
    await this.props.booking( profileData , this.props.history)
    
    }

    render() {
        const { user } = this.props.auth;
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
                    
                    <button  onClick={ () =>  this.Add(repo._id, repo.Dish, repo.Type, repo.Price , res.name, res.email , res._id, user.name, user.email , user.id)}>
                    
                    {repo.Dish}
                    



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
  
  export default connect(mapStateToProps,{booking ,getlist, getId })(User);
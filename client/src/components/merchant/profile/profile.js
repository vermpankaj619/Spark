import React, { Component } from 'react';

import { connect } from "react-redux";

import { Loginn} from '../../style/profile'

import { Loader } from '../../style/profile'
import Loading from '../../style/comman/loading.gif'

 class profile extends Component {
    render() {
        const { user } = this.props.auth;
        if( user === null  )
        {
          return (
            <Loader>
            <img alt="pl"  src={Loading} ></img>
            </Loader>
  
          )
        }
           else {
    
        return (
          <Loginn>
                <form noValidate onSubmit={this.onSubmit}>
                
                    <input
                    style={{marginTop:"10rem;"}} 
                      
                     defaultValue={user.email}
                     readOnly
                     
                      placeholder="Enter Email"
                      
                    />
                   
                  
                 
            
                    <input
                      
                      placeholder="Phone"
                      defaultValue={user.phone}
                     readOnly
                      
                    />
                   
                   
                    <input
                      
                    
                      
                     
                      placeholder="Alternative Number"
                      
                    />
            
                    <button
                    
                      type="submit"
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                     Change
                    </button>
                    <p>
                    You can only change  <span>Alternative Number</span>
                  </p>
                 
                </form>
                </Loginn>
        );
           }
      }
    }
    const mapStateToProps = state => ({
        auth: state.auth,
        
      });

    export default connect(mapStateToProps)(profile)
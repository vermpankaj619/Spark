import React, { Component } from 'react';




class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { Name , Email, Last} = this.props;
        return(
            <>
            <div className="bar">
         
            <i class="fa fa-check-circle"  aria-hidden="true">---------------------------------------</i>
           
          
             
            <i class="fa fa-check-circle" id="one"  aria-hidden="true">-----------------------------------------</i>
      
             
            <i class="fa fa-check-circle"   aria-hidden="true"></i>
              </div>
                <h2>Welcome:</h2>
                <b>{Name}</b><br />
             <b>{Last}</b><br />
               
                <button className="Back" onClick={this.back}>
                    « Edit
                </button>
              
            </>
        );
    }
}

export default AllInfo;

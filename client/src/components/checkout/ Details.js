import React, { Component } from 'react';







class Details extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { Name, Last, handleChange } = this.props;
        return(
            <>
            <div className="bar">
         
            <i class="fa fa-check-circle"  aria-hidden="true">---------------------------------------</i>
           
          
             
            <i class="fa fa-check-circle"  aria-hidden="true">-----------------------------------------</i>
      
             
            <i class="fa fa-check-circle" id="one"   aria-hidden="true"></i>
              </div>
            
                <h3>Enter Your name:</h3>
                <label>
                    <input 
                        type="text"
                        name="First Name"
                        value={Name}
                        onChange={handleChange('Name')}
                        placeholder="Fisrt Name"
                    />
                </label><br/>
                <label>
                <input 
                    type="text"
                    name="Last Name"
                    value={Last}
                    onChange={handleChange('Last')}
                    placeholder="Last Name"
                />
            </label><br/>
               
            
                <button className="Next" onClick={this.continue}>
                   Next
                </button>
              
            </>
        );
    }
}

export default Details;

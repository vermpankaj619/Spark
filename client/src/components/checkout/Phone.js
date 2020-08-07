import React, { Component } from 'react';







class Phone extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { phone, handleChange } = this.props;
        return(
            <>
          
                <h3>Enter Your Phone:</h3>
                <label>
                    <input 
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={handleChange('phone')}
                        placeholder="Phone Number"
                    />
                </label><br/>
               
               
            
                <button className="Next" onClick={this.continue}>
                   Next
                </button>
              
            </>
        );
    }
}

export default Phone;

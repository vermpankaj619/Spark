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
        const { Name, phone, handleChange } = this.props;
        return(
            <>
            <div className="bar">
         
            <i class="fa fa-check-circle" id="one"   aria-hidden="true"> <span>----------------------------------</span> </i>
           
          
             
            <i class="fa fa-check-circle"  aria-hidden="true"> <span>--------------------------------</span> </i>
      
             
            <i class="fa fa-check-circle"   aria-hidden="true"></i>
              </div>
               
               <div className='multi' > 
               
                <h2>Enter Delivery Details:</h2>
                <p>Enter Name and phone</p><br/>
            
                    <input 
                        type="text"
                        name="First Name"
                        value={Name}
                        onChange={handleChange('Name')}
                        placeholder="Fisrt Name"
                    />
               <br/>
              
                <input 
                    type="text"
                    name="Phone"
                    value={phone}
                    onChange={handleChange('phone')}
                    placeholder="Last Phone"
                />
         <br/>
               
            
                <button className="Next" onClick={this.continue}>
                   Next
                </button>
                </div>
            </>
        );
    }
}

export default Details;

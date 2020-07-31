import React, { Component } from 'react'



import Details  from './ Details';
import AllInfo from './ Allinfo'
import Step1 from './ Step1'
import Phone from './Phone'
import Otp from './Otp'

import { CheckOut} from './style'








export default class Checkout  extends Component {
    state = {
        step: 1,
        // step 1    
        Email: '',
        // step 2
        Name: '',
        Last:'',
       
        //step 3
        Onetime:'',
        phone:''
    
    }
    
    nextStep = () => {
        const { step } = this.state;
    
        this.setState({
            step: step + 1
        });
    }
    
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    
    showStep = () => {
        const { step, Email, Name, phone, Last,  Onetime} = this.state;
    
        if(step === 1)
            return (<Step1 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                Email={Email}
            
            />);
        if(step === 2)
        return (<Otp 
            nextStep = {this.nextStep} 
            prevStep = {this.prevStep}
            handleChange = {this.handleChange} 
            Onetime={Onetime}
        
        />);
           
            if(step === 3)
                return (<Details 
                    nextStep = {this.nextStep} 
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange} 
                    Name={Name} 
                    Last={Last}
                    
                />);
              
               
        
    }
    
    render(){
        const { step } = this.state;
    
        return(
            <React.Fragment>
       
          
     <CheckOut>
         
                
                {this.showStep()}
                
                
                </CheckOut>
            
                </React.Fragment>
                
        );
    }
    }
    
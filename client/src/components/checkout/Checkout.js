import React, { Component } from 'react'



import Details  from './ Details';

import Payment from './Payment'

import Cart from './Cart'

import { CheckOut} from './style'
import Address from './Address';
import { connect } from "react-redux";
import { getAddress , getcart , placeorder } from '../../actions/CartActions'

import Loading from '../style/comman/loading.gif'
import {  Loader, Cartt} from '../style/profile'



class Checkout  extends Component {

  
    
    state = {
        step: 1,
        // step 1    
        mode: '',
        // step 2
        Name: '',
      
       add:'',
        //step 3
        Onetime:'',
        phone:''
    
    }
    async componentDidMount() {
       await this.props.getAddress()
       await this.props.getcart()
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
    
    added = (ad) => {
        this.setState({add:ad})
    }


   placeorder = async () => {

         await this.props.history.push('/profile')
    
    const userData = {
        name: this.state.Name,
        phone: this.state.phone,
        add: this.state.add,
        mode:this.state.mode
      };
  
  await    this.props.placeorder(userData , this.props.history);

   }


    showStep = () => {
        const { step, mode, Name, phone} = this.state;
    
        if(step === 1)
          
            return (<Details 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                Name={Name} 
                phone={phone}
                
            />);
        if(step === 2)
        return (<Address 
            nextStep = {this.nextStep} 
            prevStep = {this.prevStep}
            added={this.added}
        
        />);
           
            if(step === 3)
            return (<Payment 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                mode={mode}
                placeorder={this.placeorder}
            
            />);
              
               
        
    }
    
    render(){
        
        const { cart , address} = this.props.cart;
       
        if(   cart===null && address === null ) {
            return  (
              <Loader>
              <img alt="sd" src={Loading} ></img>
              </Loader>
              )
          }
          else {
        return(
            <React.Fragment>
       
          
     <CheckOut>
         
     <div className="add">
                {this.showStep()}
                </div>

           <div className="cart" >     
                <Cartt>
               <Cart cart={cart} address={address} add={this.state.add} />
               </Cartt>
                </div>
                </CheckOut>
            
                </React.Fragment>
                
        );
    }
    }
}
    const mapStateToProps = state => ({
        auth: state.auth,
        profile: state.profile,
        cart:state.cart,
      
      });

    export default connect(
        mapStateToProps,
        { getAddress , getcart, placeorder }
      )((Checkout));
import React, { Component } from 'react';
import {   res , getLoction } from '../../actions/profileActions';
import { connect } from "react-redux";
import { Store, Loader, Head, Data, Top, Midd} from '../style/profile'
import Loading from '../style/comman/loading.gif'
import { addcart, getcart ,removecart   } from '../../actions/CartActions'
import Cart from './Cart'

class Rest extends Component {

    state = {
        pkk: this.props.match.params.id,
        id:'',
        name:'',
        price:''


    };
 async    componentDidMount() {
        const profileData = {
            pkk:this.state.pkk
        }
      
      await  this.props.res(profileData);
        await this.props.getLoction();
        await this.props.getcart();
    }
 
 
 
    send = async  (repo , dish, price) => {
        await this.setState({id:repo, name:dish, price:price})

        const data = {
            id:this.state.id,
            name:this.state.name,
            price:this.state.price,
        }

       await this.props.addcart(data ,repo._id)
       
    }
    remove = async  (repo ) => {
   
        const data = {
            id:repo
            
        }

       await this.props.removecart(data )
       
    }
    Checkout  = async (cart) => {
      
await     cart.forEach(function (arrayItem) {
          
            console.log(arrayItem);
        });
      
        await this.props.history.push('/checkout')

    }

    render() {

        const { Schedule ,locotion } = this.props.profile;
        const { cart } = this.props.cart;

        if(  Schedule===null ) {
            return  (
              <Loader>
              <img src={Loading} ></img>
              </Loader>
              )
          }
          else {
              return (
                  <div>



               <Top>
               
            <div className="head">
            Home/ {locotion} / {this.props.match.params.id}
            
            </div>

            <div className="head2">
              
            <img src={Schedule[0].image} >
            </img>
             <ul>
             <li><h1>{Schedule[0].HotelName}</h1></li>
              <li><h2>Open For Delivery</h2></li>
              <li><h3>{Schedule[0].Place},{Schedule[0].address}</h3></li>
             </ul>
              
            </div>
               
               </Top>

              


               <Midd>
                <form>
               <input placeholder="Search Item" ></input>
               </form>
               <div className="count" >
               <div className="one" >
                 
         
               </div>

  

<div  className="two">
           {Schedule[0].Scehedule.map((repo) => {
                
            return (
                

           

                
                <li  key ={repo._id}>
                <div className="list" >
                <img src={repo.image} ></img>
                <ul>
               <li>{repo.Dish}   </li>             
                <li>₹{repo.Price}</li> 
            
                </ul>
                </div>
                 <button onClick={() =>this.send(repo._id, repo.Dish, repo.Price)} >+ Add </button>
                </li>
                
               
            )
        }
      
     )}
     </div>
     <div  className="three">
     
   <Cart  cart={cart} Checkout={this.Checkout} remove={this.remove}/>
     </div>
     </div>
     </Midd>
           
           
          







             
                
                   </div>
              )
          }
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    cart:state.cart,
  
  });
  
  export default connect(mapStateToProps,{addcart,getcart, removecart,  getLoction, res})( Rest );
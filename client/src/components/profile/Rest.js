import React, { Component } from 'react';
import {   res , getLoction } from '../../actions/profileActions';
import { connect } from "react-redux";
import {  Loader,  Top, Midd , Cartt} from '../style/profile'
import Loading from '../style/comman/loading.gif'
import { addcart, getcart ,removecart   } from '../../actions/CartActions'
import Cart from './Cart'

class Rest extends Component {

    state = {
        pkk: this.props.match.params.id,
        id:'',
        name:'',
        price:'',
        merEmail:'',
        merPhone:'',
        email:this.props.auth.user.email,
        phone:this.props.auth.user.phone,
        merid:"",
        image:'',
        HotelName:'',
        place:'',
        userid:'',
        username:'',
        useremail:'',
        userphone:'',
        


    };
 async    componentDidMount() {
        const profileData = {
            pkk:this.state.pkk
        }
      
      await  this.props.res(profileData);
        await this.props.getLoction();
        await this.props.getcart();
    }
 
 
 
    send = async  (repo , dish, price , email, phone , merid , image, HotelName , place , userid , username, useremail, userphone) => {
        await this.setState({id:repo, name:dish, price:price , merEmail:email, merPhone:phone, merid:merid  , image:image, HotelName:HotelName ,place:place ,userid,username:username, useremail:useremail, userphone:userphone})

        const data = {
            id:this.state.id,
            name:this.state.name,
            price:this.state.price,
            merPhone:this.state.merPhone,
            merEmail:this.state.merEmail,
            email:this.state.email,
            phone:this.state.phone,
            merid:this.state.merid,
            image:this.state.image,
            HotelName:this.state.HotelName,
            place:this.state.place,
            userid:this.state.userid,
            username:this.state.username,
            useremail:this.state.useremail,
            userphone:this.state.userphone,
            
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
         const { user} = this.props.auth;
        const { Schedule ,locotion } = this.props.profile;
        const { cart } = this.props.cart;

        if(  Schedule===null ) {
            return  (
              <Loader>
              <img  src={Loading}  alt="sd" />
              </Loader>
              )
          }
          else {
          if(Schedule[0].online === false) {
             return (

                <div>



                <Top>
                
             <div className="head">
             Home/ {locotion} / {this.props.match.params.id}
             
             </div>
 
             <div className="head2">
               
             <img alt="sd" src={Schedule[0].image} >
             </img>
              <ul>
              <li><h1>{Schedule[0].HotelName}</h1></li>
               <li><h2 style={{color:"red"}} > Closed For Delivery</h2></li>
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
                         <img alt="sd" style={{ filter: "grayscale(90%)"}} src={repo.image} ></img>
                         <ul>
                        <li>{repo.Dish}   </li>             
                         <li>₹{repo.Price}</li> 
                     
                         </ul>
                         </div>
                          <button  style={{background:"grey", color:"808080"}} >+ Add </button>
                         </li>
                     
                
             )
         }
       
      )}
      </div>
      
      <Cartt>
    <Cart  cart={cart} Checkout={this.Checkout} remove={this.remove}/>
    </Cartt>
      </div>
      </Midd>
            
            
           
 
 
 
 
 
 
 
              
                 
                    </div>
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
              
            <img alt="sd" src={Schedule[0].image} >
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
               

           <>
 
                
               
                {(() => {
                    if (repo.stock == 'on') {
                      return (
                        <li  key ={repo._id}>
                        <div className="list" >
                        <img alt="sd" src={repo.image} ></img>
                        <ul>
                       <li>{repo.Dish}   </li>             
                        <li>₹{repo.Price}</li> 
                    
                        </ul>
                        </div>
                         <button onClick={() =>this.send(repo._id, repo.Dish, repo.Price ,Schedule[0].email , Schedule[0].phone , Schedule[0]._id , repo.image, Schedule[0].HotelName, Schedule[0].Place , user.id, user.name, user.email, user.phone)} >+ Add </button>
                        </li>
                      )
                    } else {
                      return (
                        <li  key ={repo._id}>
                        <div className="list" >
                        <img alt="sd" style={{ filter: "grayscale(0%)"}} src={repo.image} ></img>
                        <ul>
                       <li style={{color:"808080"}} >{repo.Dish}   </li>             
                        <li style={{ color:"808080"}} >₹{repo.Price}</li> 
                    
                        </ul>
                        </div>
                         <button style={{background:"grey", color:"808080"}} >+ Add </button>
                        </li>
                      )
                    }
                  })()}
              
                </>
               
            )
        }
      
     )}
     </div>
     
     <Cartt>
   <Cart  cart={cart} Checkout={this.Checkout} remove={this.remove}/>
   </Cartt>
     </div>
     </Midd>
           
           
          







             
                
                   </div>
              )
    }
          }
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    cart:state.cart,
  
  });
  
  export default connect(mapStateToProps,{addcart,getcart, removecart,  getLoction, res})( Rest );
import React, { Component } from 'react';
import {   res , getLoction } from '../../actions/profileActions';
import { connect } from "react-redux";
import { Store, Loader, Head, Data, Top, Midd} from '../style/profile'
import Loading from '../style/comman/loading.gif'
import { addcart } from '../../actions/CartActions'

class Rest extends Component {

    state = {
        pkk: this.props.match.params.id,
        id:'',
        name:''


    };
 async    componentDidMount() {
        const profileData = {
            pkk:this.state.pkk
        }
      
      await  this.props.res(profileData);
        await this.props.getLoction();
    }
 
 
 
    send = async  (repo , dish) => {
        await this.setState({id:repo, name:dish})

        const data = {
            id:this.state.id,
            name:this.state.name,
        }

       await this.props.addcart(data ,repo._id)
       
    }


    render() {

        const { Schedule ,locotion } = this.props.profile;
        if(  Schedule===null) {
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
                 <button onClick={() =>this.send(repo._id, repo.Dish)} >+ Add </button>
                </li>
                
               
            )
        }
      
     )}
     </div>
     <div  className="three">
     
     <h3>Your Cart</h3>

     <img src={'https://res.cloudinary.com/spark3313/image/upload/v1595935770/zsl12lnrqgpncpwxfwft.png'} ></img>
     
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
  
  export default connect(mapStateToProps,{addcart, getLoction, res})( Rest );
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {   upload , getlist , getLoction } from '../../actions/profileActions';

import { Loader , Section , Section2 } from '../style/profile'
import Loading from '../style/comman/loading.gif'



class Landing extends Component {
  componentDidMount() {
      
  
  }

 async componentWillMount  () {
   

 await   this.props.getlist();
 await   this.props.getLoction();

 await   console.log(this.props.profile.locotion)
      
}



 state=
 {
  selectedFile: null
 }



  render() {
    const {user , isAuthenticated } = this.props.auth;
    const {  profiles, loading ,locotion } = this.props.profile;

     
   



       if(isAuthenticated == false) {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
              }
              else {
                if(profiles == null && locotion == null ) {
                 return (
                  
                  <Loader>
                  <img src={Loading} ></img>
                  </Loader>


                 )

                }
         else {  
           
          if(locotion == "")
          {
   return (
     <div>
     <Redirect to="/loction" />
     </div>

   )

          }
          
     else {     
          
          return (

      




           <React.Fragment>
              <Section>
                
              <div className="head">

              <h1> Welcome to <span>{locotion}</span></h1>
              <h2>Why step out when you can get everything delivered home with the tap of a button? Bangalore’s favourite delivery app gets you Food, Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for you. Why worry about your chores, when you can get it all Dun!</h2>
              
             
             
              </div>
              

            
             
              
              </Section>
  

             
              
              <h1 style={{marginLeft:"23rem", marginTop:"3rem" , fontFamily:"Nexa-Bold"}} >What do you want to get done?  </h1>
     

        <Section2>

     
          
        <Link to={`${locotion}/grocery-stores`}>
        <div className="inner" >
         <img src={'https://res.cloudinary.com/spark3313/image/upload/v1595231097/cl8jnecqotstb2gd9bsl.png'} ></img>
        <h3>Groceries & Essentials</h3>
        
        </div>
        </Link>
        <Link to={`${locotion}/fruit-and-vegetable-stores`}>
        <div className="inner" >
        <img src={'https://res.cloudinary.com/spark3313/image/upload/v1595231089/lmu4q61wm0bqwphmknat.png'} ></img>
       <h3>Fruits & Vegetables

       </h3>
       
       </div>
       </Link>
       <Link to={`${locotion}/meat-and-fish-stores`}>
       <div className="inner" >
       <img src={'https://res.cloudinary.com/spark3313/image/upload/v1595231101/yec4xxqti0kdw92cum0e.png'} ></img>
      <h3>Meet & Fish</h3>
      
      </div>
      </Link>
      <Link to={`${locotion}/restaurants`}>
      <div className="inner" >
      <img src={'https://res.cloudinary.com/spark3313/image/upload/v1595231147/vbfh3iwugtczpvk8r2wm.png'} ></img>
     <h3>Food Delivery</h3>
     
     </div>
     </Link>
     <Link to={`${locotion}/medical-stores`}>
     <div className="inner" >
     <img src={'https://res.cloudinary.com/spark3313/image/upload/v1595231238/luogk08nyw2efyt8usbs.svg'} ></img>
    <h3>Medicines</h3>
    
    </div>
    </Link>
    <Link to={`${locotion}/gifts`}>
    <div className="inner" >
    <img src={'https://res.cloudinary.com/spark3313/image/upload/v1595231281/m3ixjlibakzmjywidskd.png'} ></img>
   <h3>Gifts & Lifestyle</h3>
   
   </div>
   </Link>
   <Link to={`${locotion}/pet-supply-store`}>
   <div className="inner" >
   <img src={'https://res.cloudinary.com/spark3313/image/upload/v1595231117/pnaqabm8ks9gyi7dkdfx.png'} ></img>
  <h3>Pet Supplies</h3>
  
  </div>
  </Link>
  <Link to={`${locotion}/natural-drink`}>
  <div className="inner" >
  <img src={'https://res.cloudinary.com/spark3313/image/upload/v1595231376/auboimtmovzmz7fzqrje.png'} ></img>
 <h3>Natural Drink</h3>
 
 </div>
 </Link>
 <Link to={`${locotion}/whey-protein`}>
 <div className="inner" >
 <img src={'https://res.cloudinary.com/spark3313/image/upload/v1595231109/q1odayyhtf8xva5ll31a.png'} ></img>
<h3>Whey Protien and Supplments</h3>

</div>
</Link>

        </Section2>
           
             



              </React.Fragment>

            )
            
        
         }
        }
       
     
        
      }
      
      
      
      
      
    
    }
  }














          
   

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,

});

export default connect(mapStateToProps,{upload , getLoction, getlist})(Landing)
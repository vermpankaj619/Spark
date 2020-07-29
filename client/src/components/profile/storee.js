import React, { Component } from 'react'

import {   store ,getLoction } from '../../actions/profileActions';
import { connect } from "react-redux";
import { Store, Loader, Head, Data} from '../style/profile'
import Loading from '../style/comman/loading.gif'

class storee extends Component {
    state = {
        pkk: this.props.match.params.id,
       


    };
  
    componentDidMount() {
        const profileData = {
            pkk:this.state.pkk
        }
      
        this.props.store(profileData);
    }
    componentWillMount() {
       this.props.getLoction()
    }
    send = ( name) => {
        this.props.history.push(`/${this.props.profile.Locotion}/${this.props.match.params.id}/${name}`)
     
    }
    render() {

        const { store } =this.props.profile; 
         if(store === null) {
             return (
            <Loader>
            <img src={Loading} ></img>
            </Loader>

             )
         }

 
  else {
        if(store.length === 0)

        {
        return (
            <div>
            <h1 style={{marginLeft:"23rem", marginTop:"3rem" , fontFamily:"Nexa-Bold"}} >{this.props.match.params.id} </h1>
            <div style={{marginLeft:"23rem", marginTop:"2rem" , fontFamily:"Nexa-Bold"}}> <span style={{  fontStyle: "italic"}} >Can't find the store you're looking for on our list? Order items <br/> from a specific store of your choice and get it delivered </span> </div>
            
            <Store>

            <h2>Pick a store. Get it delivered.</h2>
             <div className="sec" >
             <div className="sec1" >
             <ul>
             <li> <img src={'https://res.cloudinary.com/spark3313/image/upload/v1595348037/samples/crchmgwzd5kakw87ytho.png'} ></img>  <h3>List the items to purchase</h3></li>
             
             <li><img src={'https://res.cloudinary.com/spark3313/image/upload/v1595348237/samples/jzq7yq2ke82duqlgtflf.svg'} ></img> <h3>Search for the store or enter the location</h3></li>
             
             <li><img src={'https://res.cloudinary.com/spark3313/image/upload/v1595348195/samples/ellloawcwim8lzui7dvp.svg'} ></img> <h3>Chat with the partner and track the order</h3></li>
             
             </ul>
             
             </div>
             <div className="sec2" >
             
             <img src={
                'https://res.cloudinary.com/spark3313/image/upload/v1595352284/samples/jrgy1411sxnxwtlnfkuu.gif'
             } ></img>
             </div>
            </div>
            </Store>
            
            
            
            </div>
        )
        }
    else {
        return (
            <div>
            <Head>
          <img  src={'https://res.cloudinary.com/spark3313/image/upload/v1595231097/cl8jnecqotstb2gd9bsl.png'} ></img>  
          <h1 >{this.props.match.params.id}<br></br> <span>  {store.length} outlets </span> </h1>
             </Head>
              <Data>
             {store.map((repo) => {
                
                    return (
                       
                        <li  onClick={ () => this.send(repo.HotelName)} key ={repo._id}>
                        <img src={repo.image} ></img>
                        <div class="data1">
                    <h2>{repo.HotelName}</h2>    
                      <h3>{repo.Hotel}</h3> 
                      <hr></hr>
                      <h1>sdjdkdsjds</h1>
                    
                        </div>
                        
                        </li>
                        
                    )
                }
             )}
          </Data>



            </div>

          





        )
    
    }}
}
}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
  
  });
  
  export default connect(mapStateToProps,{store,getLoction})( storee );

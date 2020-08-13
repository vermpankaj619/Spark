import React, { Component } from 'react';
import Menubar from './Menubar';
import {Button , Input } from '../../style/theme';
// import{ Input }from  '../../style/profile'
import{ Cat , Popup , Toggle}from './style/style'
import {  getCatlog , editPrice , outofstock} from '../../../actions/merActions';
import { connect } from "react-redux";
import { Loader } from '../../style/profile'
import Loading from '../../style/comman/loading.gif'
 class Fullcatalog extends Component {

  state= {
    active: true,
    done:true,
    Price:'',
    id:''
   }
  

    componentDidMount() {
        this.props.getCatlog()
    }


    toggleClass = (id)  =>{
   
      this.setState({ active: id });
  };
  toggle = (id)  =>{
     
    this.setState({ done: id });
  };
  close = ()  =>{
     
    this.setState({ active: true, done:true });
  };
  onChange = e => {
    this.setState({ Price: e.target.value });
  };
 


 onSubmit =  async (id)  => {
 

    const profileData = {
        
      price:this.state.Price,
      id:id

  };

   await this.props.editPrice(profileData);
   await  this.setState({ active: true });

  }

  stock =  async (id) => {
    const profileData = {
        
      on:"out",
      id:id
      

  };

   await this.props.outofstock(profileData , this.props.history);
   await  this.setState({ done: true });
   await this.props.history.push('/outofstock')


  }
  

    render() {
      const { catlog } = this.props.mer;
      if( catlog === null  )
      {
        return (
          <Loader>
          <img alt="pl"  src={Loading} ></img>
          </Loader>

        )
      }
         else {
 
        return (
            <div>
            <Menubar/>  
        
            <Cat>
              <div>
           
              </div>

             

              <div className="catlog" >
                 
              <div className="other" >
            

              <div className="Item" >
              
              Item</div>

              <div className="stock" >
              <li>Amount</li>
              <li>Stock</li>
              </div>

              </div>
              { catlog.map((repo) => {
          
                 
                return (
                  
                 <div  key={repo._id}  className="log" >
                 
                 <div className="data">
                   <img alt="sjdk" src={repo.image} ></img>

                   <ul>
                   <li>{repo.Dish}</li>
                   <li> <span>{repo.Type}</span></li>
                   </ul>

                 </div>
                 {(() => {
                  if (repo.stock== "on") {
                    return (
                      <div>
                      <div className="edit">

                      <li>{repo.Price}</li>
                      <label onClick={() => this.toggle(repo._id)} class="switch">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                      <li onClick={() => this.toggleClass(repo._id)}> <i   class="fa fa-pencil" aria-hidden="true"></i><span>Edit</span>  </li>
   
                    </div>
                       
                    {this.state.active === repo._id   &&   <Popup>
                    <div class="modal-content">
                    <span onClick={this.close} class="close">&times;</span>
                    <div className="head1" >
                    Edit Item
                    </div>
                    <div className="head2" >
                   <img alt="as" src={repo.image} ></img><br></br>
                     <form noValidate onSubmit={() =>  this.onSubmit(repo._id)}>
                     <Input value={repo.Dish} inputColor="black" readOnly /><br></br>
                     ₹<Input  value={this.state.Price}  onChange={this.onChange} type="number"   inputColor="red" /><br></br>
                   
                   <Button primary>Requset Change</Button>
                   <Button  >Cancel</Button>
                   </form>
                    </div>
                  </div>
                    </Popup> }
                   
   
                    {this.state.done === repo._id   &&   <Popup>
                     <div class="modal-content">
                     <span onClick={this.close} class="close">&times;</span>
                     <div className="head4" >
                     Confirm that <span>{repo.Dish} </span>is out of Stock
                     </div>
                     <div className="head2" >
                    <img alt="as" src={repo.image} ></img><br></br>
    
                      
                    <Button  onClick={() =>  this.stock(repo._id)} primary>Confirm</Button>
                    <Button  onClick={this.cancel}>Cancel</Button>
    
                     </div>
                   </div>
                     </Popup> }
                      
                      </div>
                    )
                  }  else {
                    return (

                      <Toggle>

                      <li>{repo.Price}</li>
                     
                      
                      <label  class="switchh">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                      
                
   
                    
                     
                      </Toggle>
                    )
                  }
                })()}


               
                 
                 
                  </div>
                
              

              
                  )
                 
                
                }
              
             )}
      
                  </div>
               
                 
                
            </Cat>
            
            </div>
        )
         }
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    mer:state.mer
  });

export default connect(mapStateToProps,{getCatlog ,outofstock, editPrice})(Fullcatalog)
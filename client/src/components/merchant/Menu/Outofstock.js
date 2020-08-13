import React, { Component } from 'react'
import Menubar from './Menubar';
import {Button , Input ,} from '../../style/theme';
// import{ Input }from  '../../style/profile'
import{ Cat , Popup,  Toggle}from './style/style'
import {  getCatlog, backstock } from '../../../actions/merActions';
import { connect } from "react-redux";

import { Loader } from '../../style/profile'
import Loading from '../../style/comman/loading.gif'
 class Outofstock extends Component {
    componentDidMount() {
        this.props.getCatlog()
    }
    state= {
        active: true,
        done:true,
       }
    
    toggle = (id)  =>{
       
      this.setState({ done: id });
    };
    close = ()  =>{
       
      this.setState({ active: true, done:true });
    };
    
       
        stock =  async (id) => {
            const profileData = {
                
              on:"on",
              id:id
              
        
          };
        
           await this.props.backstock(profileData, this.props.history);
           await  this.setState({ done: true });
           await this.props.history.push('/fullcatelog')
        
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
                      if(repo.stock === "out")
                    return (
                      <div>
                     <div  key={repo._id}  className="log" >
                     
                     <div className="data">
                       <img src={repo.image} ></img>
    
                       <ul>
                       <li>{repo.Dish}</li>
                       <li> <span>{repo.Type}</span></li>
                       </ul>
    
                     </div>
                     <Toggle>

                      <li>{repo.Price}</li>
                     
                      
                      <label onClick={() => this.toggle(repo._id)}  class="switchh">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                      
                
   
                    
                     
                      </Toggle>
                        
                  
                    
    
                     {this.state.done === repo._id   &&   <Popup>
                      <div class="modal-content">
                      <span onClick={this.close} class="close">&times;</span>
                      <div className="head4" >
                      Confirm that <span>{repo.Dish} </span> back in stock ?
                      </div>
                      <div className="head2" >
                     <img src={repo.image} ></img><br></br>
     
                       
                     <Button onClick={() =>  this.stock(repo._id)} primary>Confirm</Button>
                     <Button  >Cancel</Button>
     
                      </div>
                    </div>
                      </Popup> }
                     
                     
                      </div>
                    
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
export default connect(mapStateToProps,{getCatlog , backstock})(Outofstock)
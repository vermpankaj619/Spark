import React, { Component } from 'react'
import  Orderbar from './orderbar'
import {New} from './style/style'
import {getorders , filteritem , accept } from '../../../actions/merActions';
import { connect } from "react-redux";
import { Loader } from '../../style/profile'
import Loading from '../../style/comman/loading.gif'
import { ORDERS } from '../../../actions/types';
class orders extends Component {

    state = {
        order:''
    }
    componentDidMount() {
        this.props.getorders()
    }
    
    send = async (order, orders) => {
   
        await this.setState({order:order})

        this.props.filteritem(orders, this.state.order)
    }
    Senddata = (acc) => {
       
      this.props.accept(acc, this.props.history)
    

    }

    render() {
      const { orders ,data } = this.props.mer;
      if( orders === null  )
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

              

            <Orderbar/>
            
         <New>
         
         
         <div className="left">
         

         <input placeholder="Search order" ></input>
         
         {orders.map((repo) => {

          if(repo.status ==="active")
                {
          return (
             <div className="repo" >
              <li  onClick={ () => this.send(repo.orderNumber, orders)} key ={repo._id}>
              
            
        OrderID:  <span>{repo.orderNumber}</span>    
            
          
              
                 

            
              </li>
            </div>
              
          )
      }
    }
   )}

         
         </div>
         
         
        

         {(() => {
          if (data.length === 0) {
            return (
              <div className="right">
              </div>
            )
          }else {
            return (
              <div className="right">
              <div className="bar">
              <i className="fa fa-check-circle"   id="two"  aria-hidden="true">--------------------------------</i>
              <i className="fa fa-check-circle"  aria-hidden="true">--------------------------------</i>
 
              <i className="fa fa-check-circle"   aria-hidden="true"></i>
                </div>
  
                <button onClick={() =>  this.Senddata(data)} >Accept</button>
                <button onClick={() =>  this.Senddata(data)} >Cancel</button>
  
           {data.map((repo) => {
                  
            return (
               
                <li   key ={repo._id}>
                
                <div class="data1">
            <h2>{repo.orderNumber}</h2>    
              
            
                </div>
                
                </li>
                
            )
        }
     )}
    
           </div>
              
            )
          }
        })()}
      
         
         
         
         </New>













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

export default connect(mapStateToProps,{getorders ,accept, filteritem })(orders)
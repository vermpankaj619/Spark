import React, { Component } from 'react';
import {   res  } from '../../actions/profileActions';
import { connect } from "react-redux";
import { Store, Loader, Head, Data} from '../style/profile'
import Loading from '../style/comman/loading.gif'
import { addcart } from '../../actions/CartActions'

class Rest extends Component {

    state = {
        pkk: this.props.match.params.id,
        id:'',
        name:''


    };
    componentDidMount() {
        const profileData = {
            pkk:this.state.pkk
        }
      
        this.props.res(profileData);
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

        const { Schedule  } = this.props.profile;
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
                  {Schedule[0].image}
                  {Schedule[0].Scehedule.map((repo) => {
                
                    return (
                       
                        <li  key ={repo._id}>
                        <img src={repo.image} ></img>
                        <div className="data1">
                  {repo.Dish}               
             
                    
                        </div>
                         <h1 onClick={() =>this.send(repo._id, repo.Dish)} >+</h1>
                        </li>
                        
                    )
                }
             )}
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
  
  export default connect(mapStateToProps,{addcart, res})( Rest );
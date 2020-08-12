import React, { Component } from 'react';

import { connect } from "react-redux";
import { Loginn} from '../style/profile'
import { Loader } from '../style/profile'
import Loading from '../style/comman/loading.gif'
import {   getsch , createSchedule  } from '../../actions/profileActions';
import Tags from "@yaireo/tagify/dist/react.tagify" // React-wrapper file
import "@yaireo/tagify/dist/tagify.css" // Tagify CSS
 class Adddata extends Component {
    componentDidMount() {
      
        this.props.getsch();
    }

    state = {
        categories:'',
        Dish:'' ,
         Price:'' , 
         Type:'Veg',
         image:'',
       
        
        
      };

  
   
      onChange = async e => {
  
       
         await  this.setState({ [e.target.id]: e.target.value });
        
      };
      handleChange = (e) => {
        this.setState({Type: e.target.value});
      }

      onUpload = async (e) => {
        const files = e.target.files;
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'arlnf3ja')
        
        const res = await fetch('https://api.cloudinary.com/v1_1/spark3313/image/upload', {
          method: 'POST',
          body:data
        })
        const file = await res.json()
        let link = file.secure_url
         console.log(link)
      await   this.setState({ image:link });
      }
      onSubmit = async (e) => {
     
        e.preventDefault();

    
        const profileData = {
            categories: this.state.categories,
        
               Dish: this.state.Dish,
            Price:this.state.Price , 
            Type:this.state.Type,
            image:this.state.image,
            data:this.state.data
     
        };
    
       await this.props.createSchedule(profileData, this.props.history);
      }
    
     

  
    
     
    render() {
     
        const { Schedule } = this.props.profile;
        if( Schedule===null ) {
           
            return (
                <Loader>
                <img alt="pl"  src={Loading} ></img>
                </Loader>
            )
        } else {  
           
                return (
                  <Loginn>
              <div>
                <form  onSubmit={this.onSubmit}>
                <div className="input-field col s12">
             
                <Tags
          placeholder="Category"
                
                 // dynamic props such as "loading", "showDropdown:'abc'", "value"
                onChange={e => (this.setState({categories:e.target.value}))}
              />
              
              </div>
              
              <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Dish}
              placeholder="Dish"
                id="Dish"
                type="name"
              
              />
              
            </div>
            <div className="input-field col s12">
            <input
              onChange={this.onChange}
              value={this.state.Price}
            placeholder="Price"
              id="Price"
              type="name"
            
            />
          
          </div>
     
          <div className="input-field col s12">

          <select value={this.state.Type} onChange={this.handleChange}>
          <option>-------Type------</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
      
        </select>
        

        </div>
       
        <input type="file" onChange={this.onUpload}/>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Enter
              </button>
            </div>
            </form>

               

           
           



            </div>

   

            </Loginn>




                )
            }
                
    }
 }

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
  
  });


export default connect(mapStateToProps,{createSchedule, getsch})(Adddata)
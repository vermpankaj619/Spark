import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
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
    
     

      onSubmitt = (e) => {
        e.preventDefault();

        console.log(this.state)
    
        // const Data = {
        //     Dish: this.state.Dish,
        //     Price:this.state.Price , 
        //     Type:this.state.Type,
        //     requestId:this.state.requestId,
        
          
        // };
    
        // this.props.adddata(Data);
      }
    
     
    render() {
        const {user} = this.props.auth;
        const { Schedule } = this.props.profile;
        if( Schedule===null ) {
           
            return (
                <div>
                dfhdfjfdjdfhjf
                </div>
            )
        } else {  
           
                return (
              <div>
                <form  onSubmit={this.onSubmit}>
                <div className="input-field col s12">
             
                <Tags
   
                
                 // dynamic props such as "loading", "showDropdown:'abc'", "value"
                onChange={e => (e.persist(), this.setState({categories:e.target.value}))}
              />
                <label htmlFor="name">categories</label>
                <span className="red-text">
                
                </span>
              </div>
              
              <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Dish}
              
                id="Dish"
                type="name"
              
              />
              <label htmlFor="name">Dish</label>
              <span className="red-text">
              
              </span>
            </div>
            <div className="input-field col s12">
            <input
              onChange={this.onChange}
              value={this.state.Price}
            
              id="Price"
              type="name"
            
            />
            <label htmlFor="name">Price</label>
            <span className="red-text">
            
            </span>
          </div>
     
          <div className="input-field col s12">

          <select value={this.state.Type} onChange={this.handleChange}>
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

               

            {Schedule.map((repo) => {
                if(repo.categories == "indian") {
                    return (
                        <li key ={repo._id}>
                        {(() => {
                            if ( repo.Type=='non-veg') {
                              return (
                                <div>red</div>
                              )
                           
                            } else {
                              return (
                                <div>catch all</div>
                              )
                            }
                          })()}
                             
                        {repo.Dish}
                        {repo.categories}
                        
                        <img  src={repo.image} ></img>
                        </li>
                    )
                }
              
               
             
              
              })}
              {Schedule.map((repo) => {
                if(repo.categories == "am") {
                    return (
                        <li key ={repo._id}>
                        {repo.Dish}
                        {repo.categories}
                        
                        </li>
                    )
                }
              
               
             
              
              })}




            </div>

   






                )
            }
                
    }
 }

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
  
  });


export default connect(mapStateToProps,{createSchedule, getsch})(Adddata)
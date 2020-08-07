import React, { Component } from 'react';

import { connect } from "react-redux";
import {  Redirect } from "react-router-dom";

import {    setLoction ,getLoction } from '../../actions/profileActions';

import { Loader , Section , Section2 , SrchList } from '../style/profile'

import Loading from '../style/comman/loading.gif'

 class Loction extends Component {

    async componentWillMount  () {
   

     
          this.props.getLoction();
      
             
       }
  
        items = [
            'Adilabad  , AP',
			'Anantapur  , AP',
			'Chittoor  , AP',
			'Kakinada  , AP',
			'Guntur  , AP',
			'Hyderabad  , AP',
			'Karimnagar  , AP',
			'Khammam  , AP',
			'Krishna  , AP',
			'Kurnool  , AP',
			'Mahbubnagar  , AP',
			'Medak  , AP',
			'Nalgonda  , AP',
			'Nizamabad  , AP',
			'Ongole  , AP',
			'Hyderabad  , AP',
			'Srikakulam  , AP',
			'Nellore  , AP',
			'Visakhapatnam  , AP',
			'Vizianagaram  , AP',
			'Warangal  , AP',
			'Eluru  , AP',
            'Kadapa  , AP',
            'Baksa , Assam ' ,
			'Barpeta , Assam ' ,
			'Bongaigaon , Assam ' ,
			'Cachar , Assam ' ,
			'Chirang , Assam ' ,
			'Darrang , Assam ' ,
			'Dhemaji , Assam ' ,
			'Dima Hasao , Assam ' ,
			'Dhubri , Assam ' ,
			'Dibrugarh , Assam ' ,
			'Goalpara , Assam ' ,
			'Golaghat , Assam ' ,
			'Hailakandi , Assam ' ,
			'Jorhat , Assam ' ,
			'Kamrup , Assam ' ,
			'Kamrup Metropolitan , Assam ' ,
			'Karbi Anglong , Assam ' ,
			'Karimganj , Assam ' ,
			'Kokrajhar , Assam ' ,
			'Lakhimpur , Assam ' ,
			'Marigaon , Assam ' ,
			'Nagaon , Assam ' ,
			'Nalbari , Assam ' ,
			'Sibsagar , Assam ' ,
			'Sonitpur , Assam ' ,
			'Tinsukia , Assam ' ,
            'Udalguri , Assam ' ,
            'Bilaspur',
			'Chamba',
			'Hamirpur',
			'Kangra',
			'Kinnaur',
			'Kullu',
			'Lahaul and Spiti',
			'Mandi',
			'Shimla',
			'Sirmaur',
			'Solan',
			'Una',
            
			'Araria , Bihar',
			'Arwal , Bihar',
			'Aurangabad , Bihar',
			'Banka , Bihar',
			'Begusarai , Bihar',
			'Bhagalpur , Bihar',
			'Bhojpur , Bihar',
			'Buxar , Bihar',
			'Darbhanga , Bihar',
			'East Champaran , Bihar',
			'Gaya , Bihar',
			'Gopalganj , Bihar',
			'Jamui , Bihar',
			'Jehanabad , Bihar',
			'Kaimur , Bihar',
			'Katihar , Bihar',
			'Khagaria , Bihar',
			'Kishanganj , Bihar',
			'Lakhisarai , Bihar',
			'Madhepura , Bihar',
			'Madhubani , Bihar',
			'Munger , Bihar',
			'Muzaffarpur , Bihar',
			'Nalanda , Bihar',
			'Nawada , Bihar',
			'Patna , Bihar',
			'Purnia , Bihar',
			'Rohtas , Bihar',
			'Saharsa , Bihar',
			'Samastipur , Bihar',
			'Saran , Bihar',
			'Sheikhpura , Bihar',
			'Sheohar , Bihar',
			'Sitamarhi , Bihar',
			'Siwan , Bihar',
			'Supaul , Bihar',
			'Vaishali , Bihar',
			'West Champaran , Bihar',
            'Chandigarh , Bihar',
            'Dadra and Nagar Haveli',
            'Daman',
            'Diu',
            'Central Delhi',
			'East Delhi',
			'New Delhi',
			'North Delhi',
			'North East Delhi',
			'North West Delhi',
			'South Delhi',
			'South West Delhi',
            'West Delhi',
            'Ahmedabad',
			'Amreli district',
			'Anand',
			'Banaskantha',
			'Bharuch',
			'Bhavnagar',
			'Dahod',
			'The Dangs',
			'Gandhinagar',
			'Jamnagar',
			'Junagadh',
			'Kutch',
			'Kheda',
			'Mehsana',
			'Narmada',
			'Navsari',
			'Patan',
			'Panchmahal',
			'Porbandar',
			'Rajkot',
			'Sabarkantha',
			'Surendranagar',
			'Surat',
			'Vyara',
			'Vadodara',
            'Valsad',
            'Ambala,',
			'Bhiwani,',
			'Faridabad,',
			'Fatehabad,',
			'Gurgaon,',
			'Hissar,',
			'Jhajjar,',
			'Jind,',
			'Karnal,',
			'Kaithal,',
			'Kurukshetra,',
			'Mahendragarh,',
			'Mewat,',
			'Palwal,',
			'Panchkula,',
			'Panipat,',
			'Rewari,',
			'Rohtak,',
			'Sirsa,',
			'Sonipat,',
			'Yamuna Nagar,',
        ];
        
       state = {
          suggestions: [],
          text: ''
        }
    
      
    onTextChanged = (e) => {
      const value = e.target.value;
      let suggestions = [];
      if(value.length > 0) {
        const regex = new RegExp(`^${value}`, 'i');
        suggestions = this.items.sort().filter(v => regex.test(v));
      }
      this.setState({suggestions, text: value});
    }
    
    suggestionSelected(value) {
      this.setState({
        text: value,
        suggestions: []
      });
  
    }
    
    renderSuggestions() {
      const {suggestions} = this.state;
      if(suggestions.length === 0) {
        return null;
      }
      return (
        <SrchList>
          <ul>
            {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
          </ul>
        </SrchList>
      );
    }

    onSubmit = () => {
       const  profileData = {
           text:this.state.text
       }
       this.props.setLoction(profileData, this.props.history)
    }
    
      render() {
        const { text } = this.state;

        const { locotion } = this.props.profile
      

            if(locotion == null ) {
                return (
                 
                 <Loader>
                 <img alt="pl" src={Loading} ></img>
                 </Loader>


                )

               }
               else { 
                   if(locotion !== ''){
                       return (
                           <div>
                           <Redirect to="/" />
                           </div>
                       )
                   }
                   else {
                   return (


            <React.Fragment>
            <Section>
              
            <div className="head">
			<div className="head2">
            <h1>Many needs, one app</h1>
            <h2>Need groceries, food or pet supplies delivered? Get it Dun!</h2>
            <form  noValidate onSubmit={this.onSubmit}>
			<i class="fa fa-map-pin" aria-hidden="true"></i>
            <input id="inpp1" value={text} onChange={this.onTextChanged} type="text" placeholder="Enter the Loction"  />
            
           <button>Proceed</button>
             </form>
           
             {this.renderSuggestions()}
            </div>
            </div>

          
           
            
            </Section>


           
            
            <h1 style={{marginLeft:"23rem", marginTop:"3rem" , fontFamily:"Nexa-Bold"}} >What do you want to get done?  </h1>
   

      <Section2>

   
        
      
      <div className="inner" >
       <img alt="pl" src={'https://res.cloudinary.com/spark3313/image/upload/v1595231097/cl8jnecqotstb2gd9bsl.png'} ></img>
      <h3>Groceries & Essentials</h3>
      
      </div>
      
     
      <div className="inner" >
      <img alt="pl" src={'https://res.cloudinary.com/spark3313/image/upload/v1595231089/lmu4q61wm0bqwphmknat.png'} ></img>
     <h3>Fruits & Vegetables

     </h3>
     
     </div>
    
     <div className="inner" >
     <img alt="pl" src={'https://res.cloudinary.com/spark3313/image/upload/v1595231101/yec4xxqti0kdw92cum0e.png'} ></img>
    <h3>Meet & Fish</h3>
    
    </div>

    <div className="inner" >
    <img alt="pl" src={'https://res.cloudinary.com/spark3313/image/upload/v1595231147/vbfh3iwugtczpvk8r2wm.png'} ></img>
   <h3>Food Delivery</h3>
   
   </div>
  
   <div className="inner" >
   <img alt="pl" src={'https://res.cloudinary.com/spark3313/image/upload/v1595231238/luogk08nyw2efyt8usbs.svg'} ></img>
  <h3>Medicines</h3>
  
  </div>

  <div className="inner" >
  <img alt="pl" src={'https://res.cloudinary.com/spark3313/image/upload/v1595231281/m3ixjlibakzmjywidskd.png'} ></img>
 <h3>Gifts & Lifestyle</h3>
 
 </div>

 <div className="inner" >
 <img alt="pl" src={'https://res.cloudinary.com/spark3313/image/upload/v1595231117/pnaqabm8ks9gyi7dkdfx.png'} ></img>
<h3>Pet Supplies</h3>

</div>

<div className="inner" >
<img alt="pl" src={'https://res.cloudinary.com/spark3313/image/upload/v1595231376/auboimtmovzmz7fzqrje.png'} ></img>
<h3>Natural Drink</h3>

</div>

<div className="inner" >
<img alt="pl" src={'https://res.cloudinary.com/spark3313/image/upload/v1595231109/q1odayyhtf8xva5ll31a.png'} ></img>
<h3>Whey Protien and Supplments</h3>

</div>


      </Section2>
     



            </React.Fragment>
         
        );
      }
    }
    }
    }

    const mapStateToProps = state => ({
        auth: state.auth,
        profile: state.profile,
      
      });


    export default connect(mapStateToProps,{setLoction, getLoction})(Loction)
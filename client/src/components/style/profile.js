
import styled from 'styled-components'
import React from 'react';
import pala from './comman/Nexa-Bold.otf';
import pala2 from './comman/Nexa-Light.otf';
import { createGlobalStyle } from 'styled-components';

import { green1 } from './color'


import logo from '../style/comman/download.png'
import logo2 from '../style/comman/gps.png'






export const Section1 = styled.nav`

   padding-left:15rem;
   padding-right:15rem;
   padding-top:7rem;
   background-color:#37718e;

.one {
     
    display:flex;
    justify-content:space-between;
    h1 {
        color:white;
        font-family: Nexa-Bold;
    }
    h3 {
        color:white;
        font-family: Nexa-Bold;
    }
    button {
        font-size:1rem;
        background-color:#37718e;
        border-color:white;
        padding:1rem;
        color:white;
        font-family: Nexa-Bold;
    }


}


}`

export const Loader = styled.div`
 
margin-left:45rem;
margin-top:5rem;


}`



export const Section = styled.div`
 
background-image: url("https://res.cloudinary.com/spark3313/image/upload/v1595224102/azd0eizirztsh7eeghuq.jpg");
background-color: #cccccc;

background-position: center;
background-repeat: no-repeat;
background-size: cover;


.head {
    text-align:center;
    padding-top:6rem;
    padding-bottom:6rem;
    color:white;
    font-family: Nexa-Bold;
}
h1 {
    font-size:3rem;
}
h2 {
    font-size:2rem; 
}
#inpp1 {
   
 width:40rem;
      padding:1rem;  
     font-size:1rem;
     font-family: Nexa-Bold;
     border-radius: 10px;
     border: 1px solid white;   

      }
      button {
          margin-left:1rem;
          color:white;
          border: 1px solid #55c18c;;
          background-color:#55c18c;
          border-radius: 10px;
          padding:0.7rem 2rem;; 
          font-size:1.5rem; 
          font-family: Nexa-Bold;
      }
}`

export const Section2 = styled.div`

margin-left:23rem;
margin-top:3rem;
margin-right:16rem;
display:grid;
grid-template-columns: auto auto auto;
.inner {
    width:22rem;
    border: 1px solid white;
    padding: 1.5rem;;
    border-radius: 5px;
    background-color:white;
    display:flex;
    justify-content:flex-start;
    margin-bottom:2rem;
    img{
        width:18%;
        padding-left:1rem;
    }
    h3 {
        padding-left:1rem;
        font-family: Nexa-Bold;
    }
}

}`


export const Searchh = styled.div`

text-align:center;
margin-top:3rem;
margin-left:30rem;
margin-right:30rem;
  display: flex;
    border: none;

  margin-bottom: 15px;

    i{
        height:3rem;
     padding-top:1.2rem;
     padding-left:1rem;
        background: white;
         border: none;
        font-size:1.5rem;
        min-width: 50px;
        text-align: center;
      }
      
      input {
        width: 100%;
        padding: 10px;
        outline: none;
        font-size:1.3rem;
           border: none;
           font-family: Nexa-Bold;
      }
       #cut {
      
         background-color:#e9e9eb;
         font-size:3rem;
         position: absolute;
         left: 91rem;;
         top: 144px;
       }



}`
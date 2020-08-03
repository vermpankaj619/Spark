
import styled from 'styled-components'
import React from 'react';

import { createGlobalStyle } from 'styled-components';











export const CheckOut = styled.div`
display:flex;
margin-left:26rem;
margin-right:23rem;
margin-top:4rem;
display:grid;
grid-template-columns: 70% 30%;
 
  .add {
  .bar
  {
      margin-bottom:1rem;
      display:flex;
     i {
         color:#C8C8C8;
         font-size:2rem;
         span {
            color:#C8C8C8;
        }

         
     }
     #one {
        color:#75daab; 
        span {
            color:#C8C8C8;
        }
     }
     #two {
        color:#75daab; 
        span {
            color:#C8C8C8;
        }
     }
   
  }
  .multi{
      background:white;
      padding:2rem;
      text-align:center;
  }
  h2 {
      font-family:'Nexa-bold';
  }
   p{
    color:#C8C8C8;
    font-family:'Nexa-Light';
    margin-top:2rem;
       
   }
   input {
    background-color:#e9e9eb;
    width:27rem;
    margin-bottom:1rem;
    padding:1rem;
    border:none;
    font-family:Nexa-Bold;
    font-size:1rem;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
button {
     
    margin-bottom:1rem;
    padding:1rem;
    border:none;
    font-family:Nexa-Bold;
    width: 29rem;
   background-color: #75daab;
   color:white;
   font-size:1rem;
   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
li {
    list-style:none;
    border: 1px solid #C8C8C8;
    padding:2rem;
    margin-left:8rem;
    margin-right:8rem;
    margin-top:1rem;
    margin-bottom:1rem;
    text-align:left;
}
.count {
    display:inline;
    text-align:left;
   
    i {
       
         span {
           
        font-family:'Nexa-bold';
         }
         
    }
    span {
        font-family:'Nexa-Light';

        color:#C8C8C8;
    }
}
  
}


}

.cart {
    margin-top:3rem;
    margin-left:1rem;
}



`

export const Check = styled.div`

  margin-top:3rem;
  margin-left:2rem;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 32px;
  .three {
    border-left: 1px solid #e9e9eb;
    padding:1rem;
    h2 {
    font-family:Nexa-Bold;
    span {
        font-size:0.9rem;
        font-family: Nexa-Light;
    }
    }
    img {
        width:100%;
    }
     li {
        display:flex;
        justify-content:space-between;
        list-style:none;
       
        h3 {
            font-size:0.9rem;
            font-family: Nexa-Light;
        }
         i {
             padding-top:0.5rem;
         }
     }
    button {
        width:100%;
        color:white;
        font-size:1.3rem;
        border:none;
        background:#75daab;
        font-family:Nexa-Bold;
      margin-top:1rem;
        padding-top:0.5rem;
        padding-bottom:0.5rem;
    }
    .sub {
        display:flex;
        justify-content:space-between;
        h4 {
            font-family:Nexa-Bold;

            span {
                font-size:0.9rem;
                font-family: Nexa-Light;
            }
        }

    }
}
.ins {
    background:white;
    margin-bottom:1rem;
}

.invoice {
    background:white;
   width:10rem;
    ul {
        li{
            list-style: none;
         
        
        }
    }
}

`
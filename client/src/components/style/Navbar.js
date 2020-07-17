
import styled from 'styled-components'
import React from 'react';
import pala from './comman/Nexa-Bold.otf';
import pala2 from './comman/Nexa-Light.otf';
import { createGlobalStyle } from 'styled-components';

import { green1 } from './color'





export default createGlobalStyle`
  @font-face {
    font-family: Nexa-Bold;
    src: url(${pala}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Nexa-Light;
    src: url(${pala2}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  body {
      background-color:#e9e9eb;
  }

`;


export   const Wrapper = styled.div`

`

export const Nav = styled.nav`
background-color:white;
  display:flex;
  justify-content:center;
  
  .head {
     padding-right:30rem;
      ul  {
      
      
        list-style: none;
       li {
        display:inline;
        img{
            width:25%
        }
       }
      
  }
}
  .head2
   {
       ul  {
      
          
    list-style: none;
    padding-top:0.7rem;
    li {
        display:inline;
        padding-right:2rem;
        
       
        span {
            padding-left:0.8rem;
            font-size:1.1rem;
            color:grey;
            font-family: Nexa-Light;

        }
        i {
            color:grey;
            font-size:1.2rem;
         
        }
        &:hover {
          span {
              color: #75daab;
          }  
          i {
            color: #75daab; 
          }
          }
       }
  
}
}

}`



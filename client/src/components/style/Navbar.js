
import styled from 'styled-components'

import pala from './comman/Nexa-Bold.otf';
import pala2 from './comman/Nexa-Light.otf';
import { createGlobalStyle } from 'styled-components';






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
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

    .cart {
      position: absolute;
      top: 1.6rem;
      right: 28.5rem;
      color: white;
      background: #75daab;
 padding-left:0.1rem;
 padding-right:0.1rem;
      border: 2px solid #75daab;
  border-radius: 25px;
  font-size:0.8rem;
    }
  
  .head {
     padding-right:20rem;
      ul  {
      
      
        list-style: none;
       li {
        display:inline;
        img{
            width:70%
        }
       }
      
  }
}
  .head2
   {
       ul  {
      
          
    list-style: none;
    padding-top:1.4rem;
    li {
        display:inline;
        padding-right:2rem;
        
       
        span {
            padding-left:0.8rem;
            font-size:1.3rem;
            color:black;
            font-family: Nexa-Light;

        }
        i {
          color:black;
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



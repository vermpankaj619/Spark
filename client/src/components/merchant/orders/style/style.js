import styled from 'styled-components';

import {green1 ,grey2, grey, navbar , bottom}  from '../../../style/color';




export const New = styled.div`

display: grid;
grid-template-columns: 25% 75%;

.left {
   border:1px solid ${bottom};
   height: 100vh;
   background:white;
   padding:0rem;
   padding-left:0;
   padding-right:0;
   list-style:none;
   input {
       
       padding:0.7rem;
       width:94%;
       font-size:1rem;
       font-family: Nexa-Light;
       text-align:center;
       margin-bottom:1rem;
   }
   .repo {
    border:1px solid ${bottom};
    
    padding-top:1rem;
    padding-bottom:1rem;
    font-size:1rem;


   li {
       text-align:center;
       font-family: Nexa-Bold;
      
      span {
        font-family: Nexa-Bold;
        font-size:1rem;

       }
      
    }
   }


.right{
   
    height: 100vh;  
    background:white;
    padding:2rem;
}


`
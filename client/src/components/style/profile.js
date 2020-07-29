
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
   
    padding-top:6rem;
    padding-bottom:6rem;
    color:white;
    font-family: Nexa-Bold;
    margin-left:23rem;
    margin-right:20rem;
  
}
.head2 {
    text-align:center;
}
h1 {
    font-size:3rem;
    span {
        color: #75daab
    }
}
h2 {
    font-size:1.4rem; 
    line-height: 150%;
}
i{
    position: absolute;
    padding:1rem;  
    right:84rem;
    top:23.05rem;
    
    border: 1px solid white;   
   background:white;
   border-left-radius: 10px;
    color:#75daab;
  }
#inpp1 {
   
 width:40rem;
      padding:1rem;  
     font-size:1rem;
     font-family: Nexa-Bold;
    
   

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
        color:black;
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



export const Store = styled.div`
margin-left:23rem;
margin-right:23rem;
margin-top:3rem;
background-color:white;


border-bottom: 5px solid black;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
padding:2rem;
h2 {
    color:#4cb7a4;
    padding-left:3rem;
    font-family: Nexa-Bold;
}
.sec {
display:grid;
grid-template-columns: 60% 40%;
 .sec1 {
     ul {
         li {
            font-family: Nexa-Bold;
            margin-top:3rem;
             display:flex;
             img {
                width:8%;
                padding-right:1rem;
             }
         }
     }
 }
 .sec2 {
     img{
         width:70%
     }
 }
}
}`

export const Head = styled.div`
padding-left:25rem; 
padding-top:3rem;
display:flex;
padding-bottom:1rem;
border-bottom: 1px solid #DCDCDC	;
img {
    width: 5%;
}
h1 {
    fontFamily:"Nexa-Bold";
    padding-left:1.5rem;
    span {
        color: #696969;
    }
}
`

export const Data = styled.div`
display:grid;
grid-template-columns: auto auto;
grid-gap:2rem;
padding-left:25rem; 
padding-top:3rem;

margin-right:23rem;
 li {
     display:flex;
     list-type:none;
     img {
         width:30%
     }
 }
 .data1 {
     padding-left:1rem;
     fontFamily:"Nexa-Bold";
     h3 {
        color: #696969;
     }
     h1 {
        color:#e9e9eb
     }
 }
`

export const SrchList = styled.div`
position: absolute;

ul {
    background-color:white;
    li {
        list-style:none;
        color:black;
        padding:1rem;  
        padding-left:0px;
        &:hover  {
            background-color: #f2f6fc;
           
        }
    };
  
}
left:33rem;
width:42rem;
     
     font-size:1rem;
     font-family: Nexa-Bold;
    
 }
`


export const Loginn = styled.div`
background-color:white;
 margin-top:5rem;

 margin-left:40rem;
 margin-right:40rem;
 img {
     padding-left:14rem;
     padding-top:2rem;
 }

  form {
    background-color:white;
     
      padding:5rem;
      padding-top:2rem;
      margin-right:1rem;
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
      .red-text {
          color:red;
          font-family:Nexa-Bold;
          padding-bootom:1rem;
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
     p{
         text-align:center;
         font-size:1.1rem;
         font-family:Nexa-Bold;
         span{
           color: #75daab;
           font-size:1rem;
         }
     }
  }
 

`


export const Top = styled.div`
background-color:#171e2f;

padding-left:23rem;
padding-right:20rem;
padding-top:2rem;
padding-bottom:8rem;
 .head {
     padding-top:1rem;
     padding-bottom:1rem;
     color:#a39caa;
     background-color:#131928;
     padding:0.5rem;
     width:20rem;
     padding-left:1rem;
 }

 .head2 {
    padding-top:2rem;
    padding-bottom:2rem;
    display: flex;
    justify-content: start;
 img {
     width:20%
 }
   
  ul {
      li {
          list-style-type:none;
          color:white;
          font-family:Nexa-Bold;
          h2 {
              color:green;
          }
        
      }
  }
 }

`


export const Midd = styled.div`
position: absolute;
left:23rem; 
top: 36rem;;
background-color:white;
width:75rem;
border-radius: 10px;
form {
    border-bottom: 1px solid #e9e9eb;
input {
    text-align:center;
    padding:1rem;
    font-size:1.2rem;
    font-family:Nexa-Bold;
    margin-top:1rem;
    margin-bottom:1rem;
    margin-left:12rem;
    width:47rem;
    border: none;
    border-radius: 4px;
    background-color:#e9e9eb;
   
}
}

.count {
display: grid;
grid-template-columns: 25% 50% 25% ;
.one {
    border-right: 1px solid #e9e9eb;
    h3 {
        

    }
}
.two {
     li {
        display: flex;
        justify-content: space-between;
        .list {
            display: flex;
        justify-content: start;
         ul {
             padding-top:1rem;
             li {
                font-family:Nexa-Bold;
                padding-top:1rem;
             }
         }
        }
        button {
            height:20%;
            color:white;
            background-color:#75daab;
            font-family:Nexa-Bold;
            border:none;
            padding:0.8rem;
            font-size: 1rem;
            margin-top:2rem;
            margin-right:1rem;
            border-radius: 25px;
        }
     }

}
.three {
    border-left: 1px solid #e9e9eb;
    padding:1rem;
    h2 {
    font-family:Nexa-Bold;
    }
    img {
        width:100%;
    }
}




}


`
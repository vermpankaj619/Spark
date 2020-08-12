import styled from 'styled-components'
 
import {green1 , navbar , bottom}  from '../../style/color'

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
      background: ${green1};
 padding-left:0.1rem;
 padding-right:0.1rem;
      border: 2px solid ${green1};
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
            font-family:Nexa-Light;

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

export const Navv = styled.nav`
background-color:white;
  display:flex;
 

  background:${navbar};
  border-bottom: 1px solid ${bottom};
 

   .head {
    display:flex;
    justify-content:space-evenly;
    {
        ul  {
       
           
     list-style: none;
     img{
        width:13%
        padding-right:2rem;
    }
  
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
             padding-top:3rem;
            
          
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
   }

 
  .head2
   {
       ul  {

        .navbar__link {
           
            font-size: 1.2em;
            font-family: 'Roboto', sans-serif;
            cursor: pointer;
            text-decoration: none;
            letter-spacing: .3em;
            text-indent: .3em;
            color: #181818;
            border-bottom: 3px solid transparent;
            padding-bottom:2rem;
            padding-right:2rem;
          }
          
          .navbar__link:hover {
            transform: translateY(-2px);
          }
          
          .navbar__link--active {
            color:#75daab;
            transition: border-bottom .5s ease-in-out;
          }

        display:flex;
        justify-content:space-evenly;
          
    list-style: none;
    padding-top:2.5rem;
    li {
        display:inline;
        padding-right:2rem;
        
       
        span {
            padding-left:0.8rem;
            font-size:1.3rem;
            color:black;
            font-family: Nexa-Light;

        }
      
        .help {
            color:${green1};
            font-size:1.2rem;
           
           
            font-family: 'Roboto', sans-serif;
         
        }
        &:hover {
          span {
              color: ${green1};
              font-family: Nexa-Bold;
          }  
          img {
            color: ${green1};
          }
          }
       }
  
}
}

}`

export   const Bar = styled.nav`



display: flex;
justify-content: start;
align-items: center;
border-radius: 4px;
background-color: #eceff1;
padding-left:16rem;
h1 {
    font-family: 'Roboto', sans-serif;
    padding-right:4rem;
}

.navbar__link {
    padding-top: 2em;
    font-size: 1.2em;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: .3em;
    text-indent: .3em;
    color: #181818;
    border-bottom: 3px solid transparent;
    padding-bottom:2rem;
    padding-right:2rem;
  }
  
  .navbar__link:hover {
    transform: translateY(-2px);
  }
  
  .navbar__link--active {
    color:#75daab;
    transition: border-bottom .5s ease-in-out;
  }

`
import styled from 'styled-components';

import {green1 ,grey2, grey, navbar , bottom}  from '../../../style/color'

export   const Bar = styled.nav`

display: flex;
justify-content: start;
align-items: center;
border-radius: 4px;
background-color: ${navbar};

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


export   const Cat = styled.div`

display:grid;
grid-template-columns: 25% 75%;
padding-right:3rem;
background:${navbar};
border-top:1px solid ${bottom};

.catlog{
  border:1px solid ${bottom};
  background:${navbar};
  border-top:none;
  margin-bottom:2rem;
  height: 100vh;
 
  .other {
    border-bottom:1px solid ${bottom};
    padding:1rem;
    display:flex;
    justify-content:space-between;
    .Item {
      font-family:Nexa-Bold;
      font-size:1.2rem;
    }
    .stock {
      display:flex;
      list-style:none;
  padding-right:22.7rem;
  li {
    padding-right:7rem;
    font-size:1.2rem;
  }
  
    }

   
  }
}
.log{
  padding:1rem;
  display:grid;
grid-template-columns: 50% 50%;
.data {
  display:flex;
  img {
    width:5rem;
    height:5rem;
  }
  ul{
    padding-top:0.7rem;
    list-style:none;
    li {
      font-size:1.2rem;
      font-family:Nexa-bold;
      span {
        font-size:1rem;
      color:${grey};
      font-family:Nexa-bold;

      }
    }
  }
}
.edit {
  display:flex;
  justify-content:space-between;
  list-style:none;
  padding-right:16rem;
  li {
    padding-top:1.5rem;
    font-size:1.2rem;
    i {
      color:${green1};

    }
    span {
      color:${green1};
      font-family:Nexa-bold;
      font-size:1.2rem;
      padding-left:0.5rem;
    }
  }
  .switch {
    margin-top:1.5rem;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${green1};
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: ${grey2};
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px ${grey2};
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
}
}


`


export   const Popup = styled.div`

  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 3rem;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
 /* Fallback color */
; /* Black w/ opacity */
  .modal-content {
    background-color: ${grey2};
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
    
   .head2 {
     text-align:center;
     padding-top:2rem;
   }
  
   .head1 {
     font-family:Nexa-bold;
   }
   .head4 {
    text-align:center;
    font-family:Nexa-light;
    span {
      font-weight:bolder;
    }
    
  }
  }
  
  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }


`

export  const Toggle = styled.div`
list-style:none;
display:flex;
  justify-content:space-between;
  
  li {
    padding-top:1.5rem;
  }
.switchh {
  margin-right:29.5rem;
  margin-top:1.5rem;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
}

.switchh input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${grey};
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 18px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: ${green1};
}

input:focus + .slider {
  box-shadow: 0 0 1px ${green1};
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(-20px);
  transform: translateX(-20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


`

export const Online = styled.div`



`

import styled from 'styled-components'
import { green1 , navbar} from './color'
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


export  const  Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#75daab" : "white"};
  color: ${props => props.primary ? "white" : "#75daab"};
font-family:Nexa-bold;
  font-size: 1em;
  margin: 1em;
  padding: 1rem;;
  border: 1px solid #75daab;
  border-radius: 3px;
`;

 export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color:${props => props.inputColor};
  background: white;
  padding: 1rem;
  border: none;
  border-radius: 3px;
  font-family:Nexa-light;
  font-size: 1em;
  width:15rem;

`;



export   const Wrapper = styled.div`

`

export const Online = styled.div`

.switch {
  position: relative;
  display: inline-block;
  width: 10rem;
  height: 34px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ca2222;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .6s;
  transition: .6s;
}

input:checked + .slider {
  background-color: #2ab934;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(8rem);
  -ms-transform: translateX(8rem);
  transform: translateX(8rem);
}

/*------ ADDED CSS ---------*/
.on
{
  display: none;
}

.on, .off
{
  color: white;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  font-size: 1rem;;
  font-family: Nexa-bold;
}

input:checked+ .slider .on
{display: block;}

input:checked + .slider .off
{display: none;}

/*--------- END --------*/

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;}

`



export  const Bar = styled.nav`

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
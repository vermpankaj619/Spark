import styled from 'styled-components';



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
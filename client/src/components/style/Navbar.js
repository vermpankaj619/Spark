
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




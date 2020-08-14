import styled from 'styled-components';

import {green1 ,grey2, grey, navbar , bottom}  from '../../../style/color';




export const New = styled.div`

display: grid;
grid-template-columns: 25% 75%;

.left {
   border:1px solid ${bottom};
   height: 100vh;
   background:white;
   padding:2rem;

}
.right{
    border:1px solid ${bottom};
    height: 100vh;  
    background:white;
    padding:2rem;
}


`
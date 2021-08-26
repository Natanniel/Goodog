import Styled, { keyframes } from 'styled-components';

export const NavMenuResponsive = Styled.nav`
    display:none;
 
    @media(max-width: 800px) {
        display:block;
        position: fixed;
        z-index:99999;
        height: 56px;
        width: 100vw;
        background: #1B98A7;
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);
        bottom: 0; 
        right: 0;
        margin-bottom: -10px;
    }
    ul{
        display:inline-block;
        text-align:center;
        li{
            list-style:none;
            display:inline-block;
            text-align:center;
            width:125px;
            border:1px solid;
            margin-left:14px ;
            font-family:Poppins;
            color:#fff;
            font-size:12px;
        }
    }
`
import Styled from 'styled-components'
import ImagemLogo from '../../assets/img/logotipo.png';

export const Sidebar = Styled.div`
    height:100vh;
    width: 255px;
    background:#363740;
    position:absolute;
`

export const Logo = Styled.span`
    display:block;
    height:29px;
    width:121px;
    margin-top:39px;
    margin-left:32px;
    background: url(${ImagemLogo});
    background-size: contain;
`


export const Menu = Styled.ul`
    margin-top:60px;
    padding-left:0px;
    li{
        cursor:pointer;
        display:block;
        width: 255px;
        height: 56px;
        line-height:56px;
        left: 0px;
        top: 128px;  
        color:#A4A6B3;
        font-size:16px;
        font-family:Mulish;
        border-left:3px solid ${props => props.selected == true ? "#1B98A7" : "#363740"};         
        a{
            text-decoration:none;
            color:#A4A6B3;
        }
        &:hover{
            a{color:#1B98A7;}
            color:#1B98A7;
        }
    }
    .selected{
        color: #1B98A7!important;
        a{color: #1B98A7!important;}
        border-left:3px solid #1B98A7;
        width: 252px!important;
    }
`

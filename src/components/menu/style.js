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
    li{
        display:block;
        width: 255px;
        height: 56px;
        left: 0px;
        top: 128px;           
    }
`

import Styled, { keyframes } from 'styled-components';
import House from '../../../assets/icons/white-house.png';
import Person from '../../../assets/icons/white-person.png';
import Logotipo from '../../../assets/img/logotipo-blue.png';
import ArrowLeft from '../../../assets/icons/arrow-left.png';

import Facebook from '../../../assets/icons/icon-facebook.png';
import Instagram from '../../../assets/icons/icon-insta.png';
import Youtube from '../../../assets/icons/icon-youtube.png';


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
        left:0;
    }
    ul{
        width: 100%;
        margin: 0px;
        padding: 0px;
        display:inline-block;
        text-align:center;
        li{
            list-style:none;
            display:inline-block;
            text-align:center;
            width:125px;
            font-family:Poppins;
            color:#fff;
            font-size:12px;
            width: 50%;
            #house{
                display:inline-flex;
                background: url(${House});
                width:20px;
                height:17px;
                margin-top:5px;
            }
            #menu{
                display:inline-flex;
                background: url(${Person});
                background-size:100% 100%;
                width:20px;
                height:17px;
                margin-top:12px;
            }
            span{
                display:block;
                color: rgba(255, 255, 255, 0.50);
            }
        }
        .active{
            span{color:#fff!important}   
        }
    }
`

export const NavMenuResponsiveLogado = Styled.nav`
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
       
    }
    ul{
        width: 100%;
        margin: 0px;
        padding: 0px;
        display:inline-block;
        text-align:center;
        li{
            list-style:none;
            display:inline-block;
            text-align:center;
            font-family:Poppins;
            color:#fff;
            font-size:12px;
            width: 20%;
            #house{
                display:inline-flex;
                background: url(${House});
                width:20px;
                height:17px;
                margin-top:5px;
            }
            #menu{
                display:inline-flex;
                background: url(${Person});
                background-size:100% 100%;
                width:20px;
                height:17px;
                margin-top:12px;
            }
            span{
                display:block;
                color: rgba(255, 255, 255, 0.50);
            }
        }
        .active{
            span{color:#fff!important}   
        }
    }
`


export const Sidebar = Styled.aside`
    position: absolute;
    height:100%;
    width:100vw;
    z-index:9999;
    position:fixed;
    background: #fff;
    font-family:Poppins;
`
export const ReturnLogo = Styled.span`
    display:block;
    height: 12px;
    width: 7.409999847412109px;
    border-radius: 0px; 
    margin-top:10px;
    background:url(${ArrowLeft});
    float:left;
`

export const LogoR = Styled.span`
    display:block;
    height: 29px;
    width: 121px;
    margin-top:26px;
    background:url(${Logotipo});
`

export const ResponsiveR = Styled.div`
    width:326px;
    margin:0 auto;
`

export const CriarContaR = Styled.span`
    height: 36px;
    width: 167px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    background: #1B98A7;
    border-radius: 4px;
    float:left;
    line-height:36px;
    color:#fff;
    font-size:14px;
    text-align:center;
`

export const EntrarR = Styled.span`
    display:block;
    float:left;
    height: 36px;
    width: 49px;
    left: 21px;
    top: 10px;
    font-size:14px;
    color: rgba(0, 0, 0, 0.6);
    text-align:center;
    line-height:36px;
    margin-left:36px;
`

export const SeparatorFR = Styled.div`
    margin-top:40px;
    border-bottom:1px solid rgba(0, 0, 0, 0.12);
`

export const SeparatorR = Styled.div`
    margin-top:16px;
    border-bottom:1px solid rgba(0, 0, 0, 0.12);
`

export const MenuR = Styled.span`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    margin-top:16px;

`

export const SocialR = Styled.div`
    margin-top:40px;
    #facebook{
        display:block;
        float:left;
        height: 20px;
        width: 20px;
        background:url(${Facebook});
        background-size:contain;
        background-repeat:no-repeat;
        margin-left:50px;
    }
    #instagram{
        display:block;
        float:left;
        height: 20px;
        width: 20px;
        background:url(${Instagram});
        background-size:contain;
        background-repeat:no-repeat;
        margin-left:50px;
    }
    #youtube{
        display:block;
        float:left;
        height: 20px;
        width: 20px;
        background:url(${Youtube});
        background-size:contain;
        background-repeat:no-repeat;
        margin-left:50px;
    }
`
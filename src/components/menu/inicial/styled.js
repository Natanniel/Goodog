import Styled, { keyframes } from 'styled-components';
import Logotipo from '../../../assets/img/logotipo-blue.png';
import BG from './asset/p.png';
import ArrowBottom from '../../../assets/icons/arrow-down.png'
import ArrowUp from '../../../assets/icons/arrow-up.png'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;
const rotateNormal = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const NavMenu = Styled.nav`
    height:85px;
    width:100%;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    @media(max-width: 800px) {
        position:absolute;
        z-index:999;
        box-shadow:none;
        display:none;
    }
`
export const MenuContainer = Styled.div`
    width: 1132px;
    margin: 0 auto;
`


export const Logo = Styled.span`
    display:block;
    height: 29px;
    width: 121px;
    position:relative;
    top:26px;
    background:url(${Logotipo});
    float:left;
    @media(max-width: 800px) {
        margin-left:24px;
    }
`

export const Menubox = Styled.ul`
    height:32px;
    border-left: 1px solid rgba(0, 0, 0, 0.12);
    margin-left: 30px;
    display:inline-block;
    position:relative;
    top:26px;
    margin:0px;
    margin-left:30px;
    padding:0px;
    float:left;
    width:610px;
    @media(max-width: 800px) {
        display:none;
    }
  
    li{
        padding: 0px 10px;
        border-radius: 4px;
        height: 36px;
        line-height:36px;
        cursor: pointer;
        float:left;
        font-size: 16px;
        list-style:none;
        color: rgba(0, 0, 0, 0.6);
        margin-left:18px;
        cursor:pointer;
        font-family:Poppins;
        &:hover{
            color: #fff;
            background:#1B98A7;
            i{
                animation: ${rotate} 0.5s forwards;
            }
        }
        i{

            animation: ${rotateNormal} 0.5s forwards;
            float:right;
            display:block;
            height: 7px;
            width: 12px;
            background: url(${ArrowBottom});
            margin-top:14px
        }
        div{
            opacity:0;            
            ul{
                display:block;
                height: 136px;
                width: 139px;
                left: 0px;
                top: 0px;
                border-radius: 4px;
                background:#fff;
                position:relative;
                box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);
                border-radius: 4px;
                z-index:99999;
                margin-top:49px;
                margin-left:0px;
                padding-left:0px;
                li{
                    display:block;
                    width:100%;
                    margin-left:0px;
                    text-indent:6px;
                    height:34px;
                    line-height:34px;
                    padding-top:0px;
                    padding:0px;
                    &:hover{
                        color: #fff;
                        background:#1B98A7;
                        border-radius:0px;
                    }
                   
                }
            },
        }
        &:hover div{
                opacity:1;
            }
        
    }
  
`

export const MenuBoxRight = Styled.div`
    height:32px;
    position:relative;
    float:right;
    font-family:Poppins;
    font-size:14px;
    top:34px;
    @media(max-width: 800px) {
        display:none;
    }
`

export const CriarConta = Styled.span`
    padding:10px;
    border-radius: 4px;
    font-size:14px;
    color:#fff;
    background:#1B98A7;
    border:1px solid #1b98a7;
    height: 36px;
    width: 146px;
    border-radius: 4px;
    cursor:pointer;
    margin-right:34px;
    font-family:Poppins;
    &:hover{
        color:#1B98A7;        
        background:#fff;
    }
`

export const BtnEntrar = Styled.span`
    padding:10px;
    border-radius: 4px;
    font-size:14px;
    height: 36px;
    border-radius: 4px;
    font-size:
    cursor:pointer;
    font-family:Poppins;
    &:hover{
        color:#1B98A7;        
        background:#fff;
        cursor:pointer;
    }
`

export const ImgUser = Styled.span`
    display:block;
    height:40px;
    width:40px;
    border-radius:50px;
    border:1px solid rgba(0, 0, 0, 0.3);
    margin-top:-10px;
    float:right;
`

export const LabelNomeUsuario = Styled.span`
    display: block;
    height: 16px;
    width:100px;
    margin-left:10px;
    color: rgba(0, 0, 0, 0.87);
    float:right;
    cursor:pointer;
    i{
        animation: ${rotateNormal} 0.5s forwards;
        float:right;
        display:block;
        height: 7px;
        width: 12px;
        background: url(${ArrowBottom});
        margin-top:5px;
        margin-left:10px;       
    }
    &:hover{
        i{
            animation: ${rotate} 0.5s forwards;
        }
    }
    div{
            opacity:0;            
            ul{
                display:block;
                height: 170px;
                width: 139px;
                left: -50px;
                top: 0px;
                border-radius: 4px;
                background:#fff;
                position:relative;
                box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);
                border-radius: 4px;
                z-index:99999;
                margin-top:49px;
                margin-left:0px;
                padding-left:0px;
                li{
                    display:block;
                    width:100%;
                    margin-left:0px;
                    text-indent:6px;
                    height:34px;
                    line-height:34px;
                    padding-top:0px;
                    &:hover{
                        color: #fff;
                        background:#1B98A7;
                    }
                   
                }
            },
        }
        &:hover div{
                opacity:1;
            }
`
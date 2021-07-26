import Styled from 'styled-components'

import BackgroundImage from '../../../assets/img/backgroundLogin.png';
import ImagemLogo from '../../../assets/img/logotipo.png';

export const Background = Styled.div`
    display:block;
    height:100vh;
    position:absolute;
    min-width:100%;
    background-image: url(${BackgroundImage});
    background-size:cover;
`

export const DivOpacity = Styled.div`
   display:block;
    height:100vh;
    position:absolute;
    min-width:100%;
    background:rgba(0,0,0,0.20);
`;

export const Logo = Styled.span`
    display:block;
    width:175px;
    height:40px;
    margin:0 auto;
    margin-top:60px;
    background-image: url(${ImagemLogo});  
`

export const Titulo = Styled.h1`
    color:#000;
    font-size:32px;
    text-align:center;
    margin-top:33px;
    font-family:Inter-bold;
    margin-bottom:0px;
    margin-top:33px;
`

export const SubTitulo = Styled.span`
    color:#fff;
    display:block;
    font-size:14px;
    text-align:center;
    margin-top:10px;
    font-family:Inter;
    height:34px;
    line-height:34px;
`

export const Box = Styled.div`
    margin:0 auto;
    margin-top:11px;
    height: 224px;
    width: 418px;
    left: 511px;
    top: 225px;
    border-radius: 10px;
    background:#fff;
    padding-top:20px;
    padding-left:40px;
    padding-right:40px;
    font-family:Inter;
`

export const Label = Styled.span`
    display:block;
    margin-top:20px;
    font-size:14px;
    color:#000;
    height:34px;
    line-height:34px;
    font-family: Inter-bold
`

export const Input = Styled.input`
    display:block;
    margin-top:5px;
    font-size:14px;
    color:#000;
    width:100%;
    border:1px solid #EFF0F6;
    border-radius:8px;
    height:44px;    
    text-indent:10px;
    
    padding: 0px;
`

export const RecoverPassword = Styled.span`
    display:block;
    margin-top:20px;
    height: 34px;
    line-height:34px;
    color:#1B98A7;
    font-size:14px;
`

export const CheckboxDiv = Styled.div`
    margin-top:10px;
`

export const Checkbox = Styled.input`
    border:1px solid #767676;
    display:block;
    float:left;
    margin-right:12px;
`

export const LabelCheckbox = Styled.label`
    margin-left:14px;
    font-size:14px;
    font-family:Inter;
    height:24px;
    display:block;
`

export const BtnEntrar = Styled.button`
    display:block;
    width: 100%;
    margin:0 auto;
    padding: 10px 20px;
    height: 44px;
    margin-top:20px;
    text-align:center;
    color:#fff;
    background:#1B98A7;
    border: 1px solid #1B98A7;
    border-radius:4px;
    font-family:Inter;
    cursor:pointer;
`
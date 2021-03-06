import Styled from 'styled-components';
import email from '../../../assets/icons/icon_email.png';
import person from '../../../assets/icons/icon_person.png';
import contact from '../../../assets/icons/icon-contact.png';
import password from '../../../assets/icons/icon-password.png';

import facebook from '../../../assets/icons/facebook-login.png';
import google from '../../../assets/icons/logo-google.png';

export const BackgroundModal = Styled.div`
    min-height:100vmax;
    width:100%;
    position:absolute;
    z-index:999;
    background:rgba(0,0,0,0.5);
    top:0px;
    left:0px;
    right:0px;
`

export const LabelPassword = Styled.label`
    clear:both;
    font-size:10px;
    font-family: Poppins;
    display: block;
    margin-left:35px; 
    width: 365px;
    text-align:left;
    
`;

export const Modal = Styled.div`
    height: 885px;
    width: 398px;
    position:absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: 10px;
    border-radius: 4px;
    top:120px;
    background:#fff;
`

export const Title = Styled.h2`
    display:block;
    height: 24px;
    width: 129px;
    text-align:center;
    width:100%;
    font-size:20px;
    margin-top:20px;
    font-family:Poppins;
`

export const BtnFacebook = Styled.span`
    display:block;
    height: 36px;
    line-height:36px; 
    color:#fff;
    font-size:14px;
    width: 238px;
    margin:0 auto;
    margin-top:16px;
    border-radius: 4px;
    background: #3B5998;
    font-family:Poppins;
    cursor:pointer;
    i{
        display:block;
        background: url(${facebook}) no-repeat;
        background-size:contain;
        height: 24px;
        width: 12px;
        position:absolute;
        margin-top: 7px;
        margin-left: 24px;
    }
`
export const BtnGoogle = Styled.span`
    display:block;
    height: 36px;
    line-height:36px; 
    font-size:14px;
    width: 238px;
    margin:0 auto;
    margin-top:10px;
    border-radius: 4px;
    background: #FFFFFF;
    font-family:Poppins;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.14)) drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2));
    color: rgba(0, 0, 0, 0.6);
    cursor:pointer;
    i{
        display:block;
        background: url(${google}) no-repeat;
        background-size:contain;
        height: 18px;
        width: 18px;
        position:absolute;
        margin-top: 9px;
        margin-left: 22px;
    }
`

export const LabelInfo = Styled.label`
    display:block;
    font-size: 12px;
    text-align: center;
    letter-spacing: -0.4px;
    margin-top:16px;
    color: rgba(0, 0, 0, 0.87);
    font-family:PoppinsLight;
`

export const InputDiv = Styled.div`
    min-height: 54px;
    width: 326px;
    margin:0 auto;
    position:relative;
    margin-top:17px;
    input{
        border: 1px solid rgba(0, 0, 0, 0.12);
        font-size:16px;
        height:54px;
        float:left;
        width:326px;
        text-indent:15px;
        border-radius: 3.5px;
        font-family:Poppins;
        &:focus{
            outline-width: 0!important;
        }
    }
    i{
        width:24px;
        height:25px;
        display:block;
        position:absolute;
        top:16px;
        margin-left:300px;
    }
    .email{
        background: url(${email});
    }
    .person{
        background: url(${person});
    }
    .contact{
        background: url(${contact});
    }
    .password{
        background: url(${password});
    }
`

export const LabelErro = Styled.label`
    color:red;
    font-family:Poppins;
    font-size:10px;
    display:block;
    padding-top:5px;
    clear:both;
    margin-bottom:-5px;
`

export const Input = Styled.input`
    border: 1px solid rgba(0, 0, 0, 0.12);
    font-size:16px;
    height:54px;
    float:left;
    width:326px;
    text-indent:15px;
    border-radius: 3.5px;
    font-family:Poppins;
    &:focus{
        outline-width: 0!important;
    }
`

export const CheckboxLabel = Styled.label`
    height: 32px;
    width: 350px;
    display:block;
    margin-top:13px;
    line-height:16px;
    font-size:10px;
    display:block;
    text-align:left;
    font-family:Poppins;
    color: rgba(0, 0, 0, 0.6);
    letter-spacing: 1.5px;
    label{
        
       cursor:pointer;
        color: #1B98A7;
    }
    input{
        display:block;
        height: 24px;
        width: 24px;
        margin-right:8px;
        margin-left:35px; 
        float:left;
        
    }
   
`;

export const Cadastrar = Styled.span`
    display:block;
    height: 15px;
    width: 168px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    float:left;
    margin-left:35px;
    font-size:14px;
    background:#1B98A7;
    border-radius: 4px;
    padding-top:9px;
    text-align:center;
    padding-bottom:9px;
    color:#fff;
    cursor:pointer;
    font-family:Poppins;
    line-height:15px;
    letter-spacing: 1.25px;
`

export const JaTenhoConta = Styled.span`
    display:block;
    height: 33px;
    width: 123px;
    color:#1B98A7;
    float:right;
    margin-right:49px;
    font-size:14px;
    margin-top:9px;
    cursor:pointer;
    font-family:Poppins;
`

export const Close = Styled.span`
    height: 14px;
    width: 14px;
    right: 21px;
    top: 21px;
    position: absolute;
    cursor:pointer;
    font-family:sans-serif;
`
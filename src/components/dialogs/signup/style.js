import Styled from 'styled-components';

export const BackgroundModal = Styled.div`
    height:100vh;
    width:100%;
    position:absolute;
    z-index:999;
    background:rgba(0,0,0,0.5);
    top:0px;
    left:0px;
    right:0px;
`

export const Modal = Styled.div`
    height: 621px;
    width: 398px;
    position:absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: 0px;
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
`
export const BtnGoogle = Styled.span`
    display:block;
    height: 36px;
    line-height:36px; 
    font-size:14px;
    width: 238px;
    margin:0 auto;
    margin-top:16px;
    border-radius: 4px;
    background: #FFFFFF;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.14)) drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2));
    color: rgba(0, 0, 0, 0.6);



`

export const LabelInfo = Styled.label`
    display:block;
    font-size: 12px;
    text-align: center;
    letter-spacing: -0.4px;
    margin-top:16px;
    color: rgba(0, 0, 0, 0.87);
`

export const InputDiv = Styled.div`
    height: 54px;
    width: 326px;
    margin:0 auto;
    position:relative;
    margin-top:17px;
`

export const Input = Styled.input`
    border: 1px solid rgba(0, 0, 0, 0.12);
    font-size:16px;
    height:54px;
    float:left;
    width:300px;
    text-indent:15px;
    border-radius: 3.5px;
 
`

export const CheckboxLabel = Styled.label`
    height: 32px;
    width: 251px;
    display:block;
    margin-top:17px;
    line-height:16px;
    font-size:10px;
    display:block;
    text-align:left;
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
`

export const Close = Styled.span`
    height: 14px;
    width: 14px;
    right: 21px;
    top: 21px;
    position: absolute;
    cursor:pointer;

`
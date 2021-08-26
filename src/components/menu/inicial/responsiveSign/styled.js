import Styled, { keyframes } from 'styled-components';

export const Titulo = Styled.span`
    display:block;
    height: 24px;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
    text-align:center;
    margin-top:37px;
    color: rgba(0, 0, 0, 0.87);
    font-family:Poppins;
`

export const Facebook = Styled.span`
    display:block;
    height: 36px;
    width: 238px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    font-size:14px;
    background: #3B5998;
    border-radius: 4px;
    line-height:36px;
    color:#fff;
    text-align:center;
    margin:0 auto;
`


export const Google = Styled.span`
    display:block;
    height: 36px;
    width: 238px;
    font-size:14px;
    background: #fff;
    line-height:36px;
    color: rgba(0, 0, 0, 0.6);
    text-align:center;
    margin:0 auto;
    margin-top:8px;
    border-radius: 4px;
    -webkit-filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.14)) drop-shadow(0px 3px 1px rgba(0,0,0,0.12)) drop-shadow(0px 1px 5px rgba(0,0,0,0.2)); 
    filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.14)) drop-shadow(0px 3px 1px rgba(0,0,0,0.12)) drop-shadow(0px 1px 5px rgba(0,0,0,0.2));
`

export const Subtitulo = Styled.span`
    display:block;
    font-size:12px;
    color: rgba(0, 0, 0, 0.87);
    margin-top:16px;
    text-align:center;
`

export const Email = Styled.input`
    border:1px solid rgba(0, 0, 0, 0.38);
    border-radius: 3.5px;
    color: rgba(0, 0, 0, 0.6);
    margin-top:16px;
    width:100%;
    height:54px;
    font-size:16px;
    text-indent:15px;
`

export const LembrarSenha = Styled.label`
    height: 32px;
    width: 100%;
    display:block;
    margin-top:13px;
    line-height:32px;
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
        float:left;
    }
`;

export const EsqueciSenha = Styled.label`
    display:block;
    height: 32px;
    line-height:32px;
    color: #1B98A7;
    text-align:right;
    font-size:14px;
    margin-top:13px;
`
export const FooterButtons = Styled.div`
    display: block;
    position: absolute;
    z-index: 99999;
    height: 56px;
    width: 100vw;
    bottom: 0;
    right: 0;
    margin-bottom: 80px;
`

export const BtnEntrar = Styled.span`
    display:block;
    height: 33px;
    width: 328px;
    border-radius: 4px;
    background: #1B98A7;
    border-radius: 4px;
    font-size:14px;
    line-height:33px;
    color:#fff;
    text-align:center;
    margin:0 auto;
`

export const BtnNoHas = Styled.span`
    display:block;

    margin:0 auto;
    height: 33px;
    width: 328px;
    margin-top:8px;
    border-radius: 4px;
    line-height:33px;
    font-size:14px;
    color:#1B98A7;
    text-align:center;
`
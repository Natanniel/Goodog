import Styled from 'styled-components';

export const Divider = Styled.hr`
    border: 0.5px solid rgba(0, 0, 0, 0.12);
    margin-top:25px;
`

export const Titulo = Styled.span`
    font-size:34px;
    font-family:Poppins;
    display:block;
    margin-top:24px;    
`

export const AddContact = Styled.span`
    display:block;
    height: 36px;
    width: 530px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    text-align:center;
    color: #1B98A7;
    line-height:36px;
    cursor:pointer;
    font-family:poppins;
`

export const Step = Styled.div`
    background-color: rgba(18,08,55,0.24) ;
    mix-blend-mode: normal;
    height:4px;
    margin-top:34px;
    span{
        display:block;
        background: #1B98A7;
        height:4px;
    }
`

export const Titulo2 = Styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #1B98A7;
    margin-top:32px;
    span{
        display:block;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.4px;
        color: rgba(0, 0, 0, 0.38);
    }
`

export const Row = Styled.div`
    display:flex;
    flex-direction: row;
    margin-top:19px;
    fieldset{
        flex:1;
        border: 1px solid  rgba(0, 0, 0, 0.12);
        border-radius: 3px;
        height:54px;
        legend{
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.4px;
            color: rgba(0, 0, 0, 0.6);
        }
        input,select{
            display:block;
            height:100%;
            width:100%;
            font-size:16px;
            font-family:Poppins;
            border:none
        }
        input:focus, select:focus {
            outline-width: 0!important;
        }
    }
`
export const BtnSalvar = Styled.span`
    display:block;
    height: 36px;
    width: 193px;
    border-radius: 4px;
    background: #1B98A7;
    border-radius: 4px;
    line-height:36px;
    color:#fff;
    cursor:pointer;
    float:right;
    text-align:center;
    font-family:Poppins;
    font-size:14px;
`

export const BtnVoltar = Styled.span`
    display:block;
    height: 36px;
    width: 103px;
    border-radius: 4px;
    color: #1B98A7;
    border-radius: 4px;
    line-height:36px;
    cursor:pointer;
    float:right;
    text-align:center;
    font-family:Poppins;
    font-size:14px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    margin-right:8px;
    border-radius: 4px;
`

export const ServiceBox = Styled.div`
    height: 100px;
    width: 530px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    margin-top:8px;
    padding:16px;
    .title{
        display:block;
        font-size:24px;
        font-family: Poppins;
        letter-spacing: 0.18px;
        color: rgba(0, 0, 0, 0.87); 
    }
    .descricao{
        display:block;
        width: 440px;
        color: rgba(0, 0, 0, 0.6);
        letter-spacing: 0.25px;
        font-size: 14px;
        font-family: PoppinsLight;
    }
    .infos{
        width:450px; 
        float:left;
    }
    input{
        display:block;
        float:right;
        margin-top:22px;
        height: 24px;
    width: 24px;
    background: #1B98A7;
    }
`
